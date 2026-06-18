# Optimize all images and videos in assets/
# Makes a backup of originals to assets_backup/ first

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$assets = Join-Path $root "assets"
$backup = Join-Path $root "assets_backup"

# --- Backup ---
Write-Host "Backing up assets to $backup ..." -ForegroundColor Cyan
if (Test-Path $backup) {
  Copy-Item -Recurse -LiteralPath $assets -Destination $backup -Force
} else {
  New-Item -ItemType Directory -Path $backup -Force | Out-Null
  Copy-Item -Recurse -LiteralPath $assets -Destination $backup
}

# --- Optimize JPGs ---
$pythonScript = @'
import os
from PIL import Image

root = r'ASSETS_PATH'
total_orig = 0
total_new = 0
count = 0

for dirpath, _, filenames in os.walk(root):
    for f in sorted(filenames):
        if not f.lower().endswith('.jpg'):
            continue
        fp = os.path.join(dirpath, f)
        orig = os.path.getsize(fp)
        total_orig += orig
        try:
            img = Image.open(fp)
            img.save(fp, 'JPEG', quality=85, optimize=True, progressive=True)
            new = os.path.getsize(fp)
            total_new += new
            count += 1
        except Exception as e:
            print(f'ERROR {fp}: {e}')

print(f'\nOptimized {count} JPGs')
print(f'  Before: {total_orig/1024/1024:.1f} MB')
print(f'  After:  {total_new/1024/1024:.1f} MB')
print(f'  Saved:  {(total_orig-total_new)/1024/1024:.1f} MB ({(1-total_new/total_orig)*100:.1f}%)')
'@

$pythonScript = $pythonScript.Replace('ASSETS_PATH', $assets.Replace('\', '\\'))
Write-Host "Optimizing JPGs (quality=85, progressive) ..." -ForegroundColor Cyan
python -c $pythonScript

# --- Optimize MP4 videos ---
$ffmpegPaths = Get-ChildItem -Recurse -Filter "ffmpeg.exe" -Path "$env:LOCALAPPDATA\Microsoft\WinGet" -ErrorAction SilentlyContinue
if ($ffmpegPaths) {
  $ffmpeg = $ffmpegPaths[0].FullName
  Get-ChildItem -Recurse -LiteralPath $assets -Filter "*.mp4" | ForEach-Object {
    $orig = $_.Length
    $temp = Join-Path $_.DirectoryName ($_.BaseName + "_temp.mp4")
    Write-Host "  Compressing $($_.Name) ($([math]::Round($orig/1MB, 1)) MB) ..." -ForegroundColor Yellow
    & $ffmpeg -i $_.FullName -c:v libx264 -b:v 800k -preset slow -movflags +faststart $temp -y 2>&1 | Out-Null
    if (Test-Path $temp) {
      Remove-Item -LiteralPath $_.FullName
      Rename-Item -LiteralPath $temp -NewName $_.Name
      $new = (Get-Item $_.FullName).Length
      Write-Host "    -> $([math]::Round($new/1MB, 1)) MB (saved $([math]::Round(($orig-$new)/1MB, 1)) MB)" -ForegroundColor Green
    }
  }
} else {
  Write-Host "ffmpeg not found. Install with: winget install FFmpeg" -ForegroundColor Yellow
}

Write-Host "`nDone! Originals backed up in assets_backup/" -ForegroundColor Cyan
