document.addEventListener('DOMContentLoaded', () => {
   let hamburger = document.querySelector('.hamburger-icon'),
   closeIcon = document.querySelector('.close-icon'),
   menu = document.querySelector('.header-main__menu');

  hamburger.addEventListener('click', function() {
    menu.classList.add('visible');
    menu.classList.remove('invisible');
    document.querySelector('body').classList.add("body-bg-black");

    hamburger.classList.add('d-none');
    closeIcon.classList.remove('d-none');
  });

  closeIcon.addEventListener('click', function() {
    menu.classList.remove('visible');
    menu.classList.add('invisible');
    document.querySelector('body').classList.remove("body-bg-black");

    closeIcon.classList.add('d-none');
    hamburger.classList.remove('d-none');
  });
  
});