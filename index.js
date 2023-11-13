let number = document.getElementById('count-el');
let prev = document.getElementById('save-el');
let count = 0;
function increment() {
    count = count + 1;
    number.innerText = count;
}

function save() {
    let countStr = count + " - ";
    prev.textContent +=  countStr;
    reset();
    number.innerText = count;
}

function reset() {
    count = 0;
}