const process = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const email = document.querySelector('.email');
const overUnder = document.querySelector('.over-under');

fname.addEventListener('click', () => {
    circles[0].classList.add('active');
});

fname.addEventListener('focusout', () => {
    if(fname.value === '') {
        circles[0].classList.remove('active');
    }
});

lname.addEventListener('click', () => {
    circles[1].classList.add('active');
});

lname.addEventListener('focusout', () => {
    if(lname.value === '') {
        circles[1].classList.remove('active');
    }
});

email.addEventListener('click', () => {
    circles[2].classList.add('active');
});

email.addEventListener('focusout', () => {
    if(email.value === '') {
        circles[2].classList.remove('active');
    }
});

overUnder.addEventListener('click', () => {
    circles[3].classList.add('active');
});

overUnder.addEventListener('focusout', () => {
    if(overUnder.value === '') {
        circles[3].classList.remove('active');
    }
});