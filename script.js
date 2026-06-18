const projects = [
  {
    title: 'Afterlight',
    folder: 'Afterlight',
    images: [
      'DSC09371.jpg',
      'DSC09409.jpg',
      'DSC09470.jpg',
      'DSC09470-Edit.jpg',
      'DSC09543.jpg',
      'DSC09544.jpg'
    ]
  },
  {
    title: 'Aurorian Ritual',
    folder: 'Aurorian_Ritual',
    images: [
      'DSC08810.jpg',
      'DSC08819.jpg',
      'DSC08826.jpg',
      'DSC08830.jpg',
      'DSC08845.jpg',
      'DSC08863.jpg',
      'DSC08864.jpg',
      'DSC08882.jpg'
    ]
  },
  {
    title: 'Crimson Desire',
    folder: 'Crimson_Desire',
    images: [
      'DSC09257.jpg',
      'DSC09334.jpg',
      'DSC09334-2.jpg',
      'DSC09335-2.jpg'
    ]
  },
  {
    title: 'Crimson Nocturne',
    folder: 'Crimson_Nocturne',
    images: [
      'DSC07758.jpg',
      'DSC07761.jpg',
      'DSC07761-2.jpg',
      'DSC07776.jpg',
      'DSC07783.jpg',
      'DSC07792.jpg',
      'DSC07793.jpg',
      'DSC07796.jpg',
      'DSC07805.jpg'
    ]
  },
  {
    title: 'Midnight Reverie',
    folder: 'Midnight_Reverie',
    images: [
      'DSC00056.jpg',
      'DSC09617-2.jpg',
      'DSC09652.jpg',
      'DSC09663.jpg',
      'DSC09664.jpg',
      'DSC09666.jpg',
      'DSC09677.jpg',
      'DSC09679.jpg',
      'DSC09712.jpg',
      'DSC09712-3.jpg',
      'DSC09715.jpg',
      'DSC09757.jpg',
      'DSC09879.jpg',
      'DSC09897.jpg',
      'DSC09976.jpg'
    ]
  },
  {
    title: 'Noir Elegance',
    folder: 'Noir_Elegance',
    images: [
      'DSC00589.jpg',
      'DSC00590.jpg',
      'DSC00602.jpg',
      'DSC00605.jpg',
      'DSC00647.jpg',
      'DSC00653.jpg',
      'DSC00655.jpg',
      'DSC00706.jpg',
      'DSC00718.jpg',
      'DSC00796.jpg',
      'DSC00906.jpg'
    ]
  },
  {
    title: 'Royal Guard',
    folder: 'Royal_Guard',
    images: [
      'DSC07817.jpg',
      'DSC07820.jpg',
      'DSC07831.jpg',
      'DSC07835.jpg',
      'DSC07841.jpg',
      'DSC07847.jpg',
      'DSC07858.jpg',
      'DSC07864.jpg',
      'DSC07865.jpg',
      'DSC07883.jpg',
      'DSC07895.jpg',
      'DSC07900.jpg',
      'DSC07904.jpg',
      'DSC07953.jpg',
      'DSC08039.jpg',
      'DSC08439.jpg',
      'DSC08449.jpg',
      'DSC08456.jpg',
      'DSC08477.jpg',
      'DSC08479.jpg',
      'DSC08524.jpg',
      'DSC08528.jpg',
      'DSC08530.jpg',
      'DSC08532.jpg',
      'DSC08539.jpg',
      'DSC08542.jpg',
      'DSC08553.jpg',
      'DSC08554.jpg',
      'DSC08555.jpg',
      'DSC08557.jpg',
      'DSC08558.jpg',
      'DSC08560.jpg',
      'DSC08569.jpg',
      'DSC08572.jpg',
      'DSC08578.jpg'
    ]
  },
  {
    title: 'Sacred Damce',
    folder: 'Sacred_Damce',
    images: [
      'DSC08284.jpg',
      'DSC08297.jpg',
      'DSC08298.jpg',
      'DSC08311.jpg',
      'DSC08312-Edit.jpg',
      'DSC08324.jpg',
      'DSC08326.jpg',
      'DSC08348.jpg',
      'DSC08349.jpg',
      'DSC08354.jpg',
      'DSC08355.jpg',
      'DSC08396.jpg'
    ]
  },
  {
    title: 'Silent Blades',
    folder: 'Silent_Blades',
    images: [
      'DSC09035.jpg',
      'DSC09039.jpg',
      'DSC09049.jpg',
      'DSC09098.jpg',
      'DSC09138.jpg',
      'DSC09146.jpg',
      'DSC09157.jpg',
      'DSC09181.jpg',
      'DSC09218-2.jpg'
    ]
  },
  {
    title: 'Sirens Song',
    folder: 'Sirens_Song',
    images: [
      'DSC00072.jpg',
      'DSC00158.jpg',
      'DSC00177.jpg',
      'DSC00386.jpg',
      'DSC00392.jpg',
      'DSC00394.jpg',
      'DSC00469.jpg',
      'DSC00472.jpg',
      'DSC00489.jpg'
    ]
  },
  {
    title: 'Way of Steel',
    folder: 'Way_of_Steel',
    images: [
      'DSC07748.jpg',
      'DSC07753.jpg',
      'DSC07755.jpg',
      'DSC08656.jpg',
      'DSC08658.jpg',
      'DSC08660.jpg',
      'DSC08740.jpg',
      'DSC08747.jpg',
      'DSC08960.jpg',
      'DSC08969.jpg',
      'DSC08980.jpg',
      'DSC08986.jpg',
      'DSC08990.jpg'
    ]
  }
];

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const navBack = document.getElementById('navBack');
const navLogo = document.getElementById('navLogo');
const overlay = document.querySelector('.menu-overlay');
const portfolioContent = document.getElementById('portfolioContent');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openMenu() {
  nav.classList.add('open');
  overlay.classList.add('open');
  menuBtn.classList.add('hidden');
}

function closeMenu() {
  nav.classList.remove('open');
  overlay.classList.remove('open');
  menuBtn.classList.remove('hidden');
}

menuBtn.addEventListener('click', openMenu);
navBack.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
navLogo.addEventListener('click', () => showView('hero'));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeMenu(); lightbox.style.display = 'none'; }
});

lightbox.addEventListener('click', () => { lightbox.style.display = 'none'; });

function showView(id, push = true) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const view = document.getElementById('view-' + id);
  if (view) view.classList.add('active');
  closeMenu();
  if (!push) return;
  const path = id === 'hero' ? '/' : '/' + id;
  history.pushState({ view: id }, '', path);
}

function buildPortfolio() {
  portfolioContent.innerHTML = projects.map(p => `
    <div class="project-section">
      <div class="project-section-title">${p.title}</div>
      <div class="project-grid">
        ${p.images.map(src => `<img src="assets/${p.folder}/${src}" alt="" loading="lazy">`).join('')}
      </div>
    </div>
  `).join('');
}

portfolioContent.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    lightboxImg.src = e.target.src;
    lightbox.style.display = 'flex';
  }
});

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-view]');
  if (!link) return;
  e.preventDefault();
  const view = link.dataset.view;
  if (view === 'menu') {
    openMenu();
  } else if (view === 'portfolio') {
    buildPortfolio();
    showView('portfolio');
  } else {
    showView(view);
  }
});

function route() {
  const path = location.pathname;
  if (path === '/portfolio') {
    buildPortfolio();
    showView('portfolio', false);
  } else if (path === '/about') {
    showView('about', false);
  } else if (path === '/contact') {
    showView('contact', false);
  } else {
    showView('hero', false);
  }
}

window.addEventListener('popstate', route);
route();
