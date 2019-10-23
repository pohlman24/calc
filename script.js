let method;
let numbers = {
  reactantOne: 0,
  reactantTwo: 0,
  operater: 0,
};

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
function operate(a, operater, b) {
  console.log(a);
  console.log(b);
  console.log(operater);
    if (operater == '+') {
      console.log('test');
      return add(a, b);
    }else if (operater == '-') {
      return minus(a ,b);
    }else if (operater == 'x') {
      return multiplication(a, b);
    }else if (operater == '÷') {
      return divide(a, b);
  };
}
function display(number) {
  return function(){
    para.textContent = number
    reactantOne = parseInt(number);
  }
}
function store() {

}
/*
so the display function needs to take a number entered and display but also store it as a varible to be used in the operate
function, but how can i get the three arguments that operater needs when display can only store one and once its click and will
overide the last saved varible.

instead of calling display when clicked i should call a new function that will store the number entered in a varible in as an
array, or object; then once you click enter it will use the array to call varibles for the operate function

*/

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
const para = document.createElement('p');
const plus = document.querySelector('#add');
const sub = document.querySelector('#sub');
const times = document.querySelector('#mult');
const div = document.querySelector('#div');
const equal = document.querySelector('#equal');
result.appendChild(para)

one.addEventListener('click', display('1'));
two.addEventListener('click', display('2'));
three.addEventListener('click', display('3'));
four.addEventListener('click', display('4'));
five.addEventListener('click', display('5'));
six.addEventListener('click', display('6'));
seven.addEventListener('click', display('7'));
eight.addEventListener('click', display('8'));
nine.addEventListener('click', display('9'));
zero.addEventListener('click', display('0'));
dot.addEventListener('click', display('.'));
plus.addEventListener('click', display('+'));
sub.addEventListener('click', display('-'));
div.addEventListener('click', display('÷'));
times.addEventListener('click', display('x'));
//equal.addEventListener('click', operate());
