let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;


/*let sumEl = document.getElementById("sumEl");

function add() {
    let result = num1 + num2;
    sumEl.textContent = "sum: " + result;
}*/


function add() {
    let sum = num1 + num2;
    let smm = "Sum: " + sum;
    document.getElementById("sum-el").innerText = smm;
}

function subtract() {
    let sum = num1 - num2;
    let smm = "Sum: " + sum;
    document.querySelector("#sum-el").textContent = smm;
}

function multiply() {
    let sum = num1 * num2;
    let smm = "Sum: " + sum;
    document.getElementById("sum-el").textContent = smm;
}

function divison() {
    let sum = num1 / num2;
    let smm = "Sum: " + sum;
    document.getElementById("sum-el").textContent = smm;
}