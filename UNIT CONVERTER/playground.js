/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pount
*/

const inputNum = 20;

const lengthEl = document.getElementById('card_length_conversion');
const volumeEl = document.getElementById('card_volume_conversion');
const mathEl = document.getElementById('card_math_conversion');


function lengthConvert() {
  const lengthResult = `
  ${inputNum} meters = ${(inputNum * 3.281).toFixed(2)} feet |
  ${inputNum} feet = ${(inputNum / 3.281).toFixed(2)} meters
 `
  lengthEl.textContent = lengthResult;
}

lengthConvert();

function volumeConvert() {
  const volumeResult = `
  ${inputNum} liters = ${(inputNum * 0.264).toFixed(2)} gallons |
  ${inputNum} gallons = ${(inputNum / 0.264).toFixed(2)} liters
 `
  volumeEl.textContent = volumeResult;
}

volumeConvert();

function mathConvert() {
  const mathResult = `
  ${inputNum} kilos = ${(inputNum * 2.204).toFixed(2)} pounds |
  ${inputNum} pounds = ${(inputNum / 2.204).toFixed(2)} kilos
 `
  mathEl.textContent = mathResult;
}

mathConvert();