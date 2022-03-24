const menu = document.querySelector(".menu-btn-open");
const menuClose = document.querySelector(".menu-btn-close");
const container = document.querySelector('.container');

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('nav').style.top = "0";
    document.querySelector('nav').style.position = "fixed";
  } else {
    document.querySelector('nav').style.top = "-7vw";
  }
  prevScrollpos = currentScrollPos;
  
  container.classList.remove('show-nav');
} 

// menu slider
menu.addEventListener('click', () => { 
  if (container.classList.contains('show-nav')) {
    container.classList.remove('show-nav');
  } else {
    container.classList.add('show-nav');
    document.querySelector('nav').style.top = window.pageYOffset+"px";
    document.querySelector('nav').style.position = "absolute"; 
  }
});

menuClose.addEventListener('click', () => {
  console.log('clicked');
  if (container.classList.contains('show-nav')) {
    container.classList.remove('show-nav');
  } else {
    container.classList.add('show-nav');
  }
});

// easter egg link
const hidden = document.querySelector('.easter-egg');
const btn = document.querySelector('.easter-egg-btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    hidden.classList.toggle('active');
    input.focus();
});
