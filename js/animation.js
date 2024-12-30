let windowSize = window.innerWidth;
const body = document.body;

setTimeout(function () {
  AOS.init(); //scroll ani
}, 10);

window.onresize = function () {
  windowSize = window.innerWidth;
  snbView(windowSize, window.scrollY);
  AOS.refresh();
};

window.addEventListener('scroll', function () {
  windowSize = window.innerWidth;
  snbView(windowSize, window.scrollY);
  AOS.refresh();
});

snbView();
snbHandler();
snbSectionMoving();

function snbView(width, scroll) {
  const snb = document.querySelector('.snb');
  if (windowSize > 760) {
    snb.classList.remove('mo-nav');
    if (scroll > 300) {
      snb.classList.add('open');
    } else {
      snb.classList.remove('open');
    }
  } else {
    if (scroll > 100) {
      snb.classList.add('mo-nav');
      snb.classList.add('open');
    } else {
      snb.classList.remove('open');
      snb.classList.remove('mo-nav');
    }
  }
  windowSize = width;
}

//모바일 메뉴 show
function snbHandler() {
  const nav = document.querySelector('.snb .btn-side-open');
  nav.addEventListener('click', function () {
    nav.closest('.snb').classList.toggle('mo-nav');
  });
}

// section 위치이동
function snbSectionMoving() {
  const section = document.querySelectorAll('.section');
  const navActive = document.querySelectorAll('.bnt-active');
  const btnNav = document.querySelectorAll('.snb .bnt-active');
  const btnTop = document.querySelector('.snb .btn-top');
  let i = null;

  window.onscroll = () => {
    section.forEach((sec, idx) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 500;
      let heigth = sec.offsetHeight;

      if (idx > 0) {
        if (top > offset && top < offset + heigth) {
          navActive.forEach((link) => {
            link.classList.remove('active');
          });
          if (idx > 0 && idx - 1 < navActive.length) {
            navActive[idx - 1].classList.add('active');
          }
        }
      }
    });
  };

  btnNav.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      i = idx > 3 ? 0 : idx + 1;
      let offTop = section[i].offsetTop;
      window.scrollTo({ top: offTop + 50, behavior: 'smooth' });
    });
  });

  btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
