navbar = document.querySelector('nav');
burger = document.querySelector('.burger div');
brand = document.querySelector('.logo');
logoBot = document.querySelector('.logo-bot');

var a = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// get color of navbar

if (a < 768) {
  // if mobile
  logoBot.setAttribute("transform", "translate(-55,15)");
  brand.setAttribute("height", "40px");
  var navColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--mobile-nav-bg-var')
} else {
  var navColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--desktop-nav-bg-var')
  // only onscroll on dekstops
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (window.pageYOffset != 0) {
      //burger.style.background = linkColorScrolled;
      navbar.style.background = navColor ;
      navbar.style.height = '80px'
      brand.setAttribute("height", "40px");

    } else {
      navbar.style.background = "rgba(0,0,0,0.8)" ;
      navbar.style.height = '150px';
      brand.setAttribute("height", "80px");
    }
  }
}
