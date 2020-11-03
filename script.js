let int1 = "", int2 = "";
let op = "";
let equation = "";
let equalPressed = true;
let answer = "";

function plus(a, b) {
  return (a + b);
}
function minus(a, b) {
  return (a - b);
}
function times(a, b) {
  return (a * b);
}
function divided(a, b) {
  return (a / b);
}
function percentOf(a, b){
  return (a/100) * b;
}

function operate(int1, op, int2) {
  answer = 0;
  if(op === "+"){
    answer = plus(int1, int2);
  }
  else if(op === "-"){
    answer = minus(int1, int2);
  }
  else if(op === "x"){
    answer = times(int1, int2);
  }
  else if(op === "÷"){
    answer = divided(int1, int2);
  }
  else if(op === "%"){
    answer = percentOf(int1, int2);
  }
  return answer;
}

function storeNumber(number) {
  add.style.backgroundColor = '#195190FF'
  sub.style.backgroundColor = '#195190FF'
  div.style.backgroundColor = '#195190FF'
  mult.style.backgroundColor = '#195190FF'

  if (equation.length >= 9){
    number.removeEventListener("click", storeNumber);
  }
  else{
    if(equalPressed){
      equation = "";
      equalPressed = false;
    }
    equation += number;
    display(int1+op+equation);
  }
}

function storeOp(operator){
  if(op === ""){
    int1 =+ equation;
    equation = "";
    display(int1 + "" + operator);
    op = operator;
  }
  else{
    int1 = operate(int1, op, +equation);
    equation = "";
    display(int1);
    op = operator;
  }
}

function evaluate() {
  if(op !== "" && equation !== ""){
    int2 = +equation;
    answer = operate(int1, op, int2);
    if(answer == Infinity){
      equation = "";
      display("ERROR");
      op = "";
      equalPressed = true;
    }
    else {
      equation = answer;
      display(equation);
      op = "";
      equalPressed = true;
    }
  }
  else{
    equal.removeEventListener("click", evaluate);
  }
}



function allClear() { // will reset the Calculator
    answer = 0;
    int1 = "";
    int2 = "";
    equation = "";
    op = "";
    equalPressed = true;
    para.textContent = '0';
}

function display(number) { // displays the numbers
  para.textContent = number;
}

// Number const
const nine = document.querySelector('#nine');
const eight = document.querySelector('#eight');
const seven = document.querySelector('#seven');
const six = document.querySelector('#six');
const five = document.querySelector('#five');
const four = document.querySelector('#four');
const three = document.querySelector('#three');
const two = document.querySelector('#two');
const one = document.querySelector('#one');
// Other const
const clear = document.querySelector('#clear');
const neg = document.querySelector('#neg');
const dot = document.querySelector('#dot');
const percent = document.querySelector('#percent');
const result = document.querySelector('#result');
const para = document.createElement('p');
const deleteBtn = document.querySelector("#backArrow");
para.textContent = '0'
// Operator const
const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const mult = document.querySelector('#mult');
const div = document.querySelector('#div');
const equal = document.querySelector('#equal');
result.appendChild(para);

// Number buttons
one.addEventListener('click', () => {return storeNumber('1')})
two.addEventListener('click', () => {return storeNumber('2')});
three.addEventListener('click', () => {return storeNumber('3')});
four.addEventListener('click', () => {return storeNumber('4')});
five.addEventListener('click', () => {return storeNumber('5')});
six.addEventListener('click', () => {return storeNumber('6')});
seven.addEventListener('click', () => {return storeNumber('7')});
eight.addEventListener('click', () => {return storeNumber('8')});
nine.addEventListener('click', () => {return storeNumber('9')});
zero.addEventListener('click', () => {return storeNumber('0')});
dot.addEventListener('click', () => {return storeNumber('.')});
neg.addEventListener('click', () => { return storeNumber('-')});
// Operator buttons
add.addEventListener('click', () => { return storeOp('+')});
sub.addEventListener('click', () => { return storeOp('-')});
div.addEventListener('click', () => { return storeOp('÷')});
mult.addEventListener('click', () => { return storeOp('x')});
percent.addEventListener('click', () => { return storeOp('%')});
// Other buttons
equal.addEventListener('click', () => {return evaluate()});
clear.addEventListener('click', () => {return allClear()});

deleteBtn.addEventListener('click', function() { 
  equation = equation.slice(0, -1);
  para.textContent = equation;
});
