let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-h");

let count = 0;

function increment() {
    count++;
    countEl.innerText = count;
}

function decrement() {
    count = count - 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.innerText += countStr;
    countEl.textContent = 0;
    count = 0;
}