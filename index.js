let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");

let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");


const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;
function inputEnter (e){
  e.preventDefault();
}
convertBtn.addEventListener("click", function () {
  console.log("hello")
  let baseValue = inputEl.value;

  let feetValue = baseValue * meterToFeet;
  let meterValue = baseValue * (1 / meterToFeet);

  let gallonValue = baseValue * literToGallon;
  let litreValue = baseValue * (1 / literToGallon);

  let poundValue = baseValue * kiloToPound;
  let kilogramValue = baseValue * (1 / kiloToPound);

  lengthEl.textContent = `
    ${baseValue} meters = ${feetValue.toFixed(3)} feet | 
    ${baseValue} feet = ${meterValue.toFixed(3)} meters
  `;

  volumeEl.textContent = `
    ${baseValue} litres = ${gallonValue.toFixed(3)} gallons | 
    ${baseValue} gallons = ${litreValue.toFixed(3)} litres
  `;

  massEl.textContent = `
    ${baseValue} kilograms = ${poundValue.toFixed(3)} pounds | 
    ${baseValue} pounds = ${kilogramValue.toFixed(3)} kilograms
  `;
});
