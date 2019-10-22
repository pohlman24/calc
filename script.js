/*
okay so where the fuck do i even begin ?
i shoudl create the basic functions like addition, multiplication and so on
need to add button functions
start with the basic addition and subtraction.
*/

function add(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function power(a, b) {
  return (a ** b);
}
function operate(operater, a, b) {
  return operater(a, b);
}

const nine = document.querySelector('#nine');
const eight = document.querySelector('#eight');
const seven = document.querySelector('#seven');
const six = document.querySelector('#six');
const five = document.querySelector('#five');
const four = document.querySelector('#four');
const three = document.querySelector('#three');
const two = document.querySelector('#two');
const one = document.querySelector('#one');
const clear = document.querySelector('#clear');
const allClear = document.querySelector('#allclear');
const dot = document.querySelector('#dot');
const pow = document.querySelector('#power');
const result = document.querySelector('#result');
