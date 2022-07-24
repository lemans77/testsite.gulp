$('.block').html('<h2>Baked fresh daily by bakers with passion.</h2>');

// active navbar
let nav = document.querySelector('.navigation-wrap');
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add('scroll-on');
  } else {
    nav.classList.remove('scroll-on');
  }
};

// nav hide
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
  l.addEventListener('click', () => { bsCollapse.toggle() })
})