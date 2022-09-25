
let num1 = 18;
let num2 = 9;

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;
let resultEl = document.getElementById('sum-el');


function addNumbers() {
  let sum = num1 + num2;
  resultEl.textContent = 'Sum:' + ' ' + sum;
}

function subsNumbers() {
  let sub = num1 - num2;
  resultEl.textContent = sub.toFixed(2);
}

function divNumbers() {
  let div = num1 / num2;
  resultEl.textContent = div.toFixed(2);
}

function multNumbers() {
  let mult = num1 * num2;
  resultEl.textContent = mult.toFixed(2);
}

function resetData() {
  resultEl.innerText = 'Sum';
}