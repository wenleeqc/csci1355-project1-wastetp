const quote = document.querySelector('.quote');
const quotesDB = ["<p>&ldquo;Every Hypebeast poops.&rdquo;</p> <p>- The Weekdy</p>", "<p>&ldquo;Number 1 choice for a number 2.&rdquo;</p> <p>- Kwanye East</p>", "<p>&ldquo;What a ridiculous bunch of totally uncool jokers.&rdquo;</p> <p>- Karbara Bruger</p>"];
let index = 0;

function getNextQuote() {
    quote.innerHTML = quotesDB[index];
    if(index < quotesDB.length-1) {
        index++; 
    } else {
        index = 0;
    }

    setTimeout(() => getNextQuote(), 8000);
}

getNextQuote();
