const loadText = document.querySelectorAll('.loading-text');
const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');

let load = 0;
let int = setInterval(blurring, 0);

function blurring() {
    load++;
    if(load > 99) {
        clearInterval(int);
    }

    loadText[0].innerText = `${load}%`;
    loadText[1].innerText = `${load}%`;
    loadText[0].style.opacity = scale(load, 0, 100, 1, 0);
    loadText[1].style.opacity = scale(load, 0, 100, 1, 0);
    bg1.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    bg2.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
} 