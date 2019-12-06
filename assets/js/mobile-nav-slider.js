const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const navSlider = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const navBar = document.querySelector('nav');

  // watch for touch clicks on the whole navbar
  navBar.addEventListener('click', () => {
    // animate accordinaly
    navSlider.classList.toggle('nav-active');
    burger.classList.toggle('burger-active');
    navLinks.forEach((link, index) => {
      if ( link.style.animation ) {
        link.style.animation = ``
      } else {
        link.style.animation = `navLinksFade 0.5s ease-in forwards ${index / 50 + 0.1 }s`
      }
    });
    burger.classList.toggle('toggle');
  });
}

navSlide();
