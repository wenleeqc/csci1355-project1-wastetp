const quote = document.querySelector('.quote');
const quotes = document.querySelectorAll('.quotes');
let index = 0;

function getNextQuote() {
    quote.innerHTML = quotes[index].innerHTML;
    if(index < quotes.length-1) {
        index++; 
    } else {
        index = 0;
    }

    setTimeout(() => getNextQuote(), 8000);
}

getNextQuote();
