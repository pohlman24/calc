let number1 = [], number2 = [];
let int1, int2;
let answer = []; 
let swap = false, clearSwap = false;
let op;
let i = 0;
let test = [];
let wholeEquation;
let num_of_decimals = 0, nums_of_negatives = 0;

let plusMath = function plus(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  if (((a+b) % 1) != 0){
    console.log('test number 20')
    return (a + b).toFixed(2);
  }
  return (a + b);
}
function minus(a, b) {
  if ((a - b) % 1 != 0) {
    return (a - b).toFixed(2);
  }
  return (a - b);
}
function times(a, b) {
  if ((a * b) % 1 != 0) {
    return (a * b).toFixed(2);
  }
  return (a * b);
}
function divided(a, b) {
  if (b == 0){
    return("Infinity")
  }
  else if ((a / b) % 1 != 0) {
    return (a / b).toFixed(2);
  }
  return (a / b);
}
function powerOf(number){
  if (swap == false){
    a = int1; 
  }
  else if (swap == true){
    a = int2;
  }
  return a**number
}

function operate(a, operater, b) {
  if (operater == '+') {
    answer[i] = plusMath(a, b);
    number1 = answer[i];
    int1 = answer[i];
    number2 = [];
    int2 = 0;
    i++;
    swap = false
    clearSwap = false;
    clear.textContent = 'C';
    return(display(number1));
  }else if (operater == '-') {
    answer[i] = minus(a, b);
    number1 = answer[i];
    int1 = answer[i]
    int2 = 0
    number2 = [];
    i++;
    swap = false
    clearSwap = false;
    clear.textContent = 'C';
    return(display(number1));
  }else if (operater == 'x') {
    answer[i] = times(a, b);
    number1 = answer[i];
    int1 = answer[i];
    number2 = [];
    int2 = 0;
    i++;
    swap = false
    clearSwap = false;
    clear.textContent = 'C';
    return(display(number1));
  }else if (operater == '÷') {
    answer[i] = divided(a, b);
    number1 = answer[i];
    int1 = answer[i];
    number2 = [];
    int2 = 0;
    i++;
    swap = false
    clearSwap = false;
    clear.textContent = 'C';
    return(display(number1));
  }
  else if (operater == '^'){

  }
}

function storeNumber(number){
  add.style.backgroundColor = '#195190FF'
  sub.style.backgroundColor = '#195190FF'
  div.style.backgroundColor = '#195190FF'
  mult.style.backgroundColor = '#195190FF'
  clear.textContent = 'C'
  clearSwap = false;

  if (swap == false){
    number1.push(number);
    int1 = number1.join('');
    int1 = parseFloat(int1);

    if (number == '-'){
      nums_of_negatives++;
      if (nums_of_negatives >= 2){
        // checks if there are already a negative
        console.log('multiple negarives check') 
        number1.pop();
        return 0;
      }
      else if (number == '-'){
        // if user enters negative button then display the negative symbol
        display(number1[0] + '0');
      }
    }

    else if (number == '.'){
      num_of_decimals++;
      if (num_of_decimals >= 2){
        // if there is already a decimal in the equation
        console.log('multiple deciamls in equation');
        number1.pop()
        return 0;
      }
      else if (number1.length <= 1){
        // if user enters a decimal before a number
        display('0.');
      }
      else {
        // displays correct decimal
        console.log('working decimal')
        display(int1 + '.');
      }
    }
    else{
      display(int1)
      wholeEquation = int1
    }

  } else if(swap == true){
    number2.push(number);
    int2 = number2.join('');
    int2 = parseFloat(int2)
    if (number == '-' && number2.length > 1) {
      int2 = negativeOperator(int2);
      display(int2)
    }
    else if (number == '-') {
      display(number2[0]);
    }
    else if (number == '.'){
      display(int2 + '.');
    }
    else{
      display(int2)
      wholeEquation += int2
    }
  }
}

function addOperator(operator){
  swap = true;
  add.style.backgroundColor = '#b5d8ff';
  op = operator; 
  test.push(operator);
  wholeEquation += test
}

function minusOperator(operator) {
  swap = true;
  sub.style.backgroundColor = '#b5d8ff';
  op = operator; 
}
function divideOperator(operator) {
  swap = true;
  div.style.backgroundColor = '#b5d8ff';
  op = operator; 
}
function multiplyOperator(operator) {
  swap = true;
  mult.style.backgroundColor = '#b5d8ff';
  op = operator; 
}
function powerOperator(operator){
  swap = true;
  pow.style.backgroundColor = '#b5d8ff';
  op = operator; 
}

function Clear(){
  if (clearSwap == false){
    if (swap == false){
      clear.textContent = 'AC'
      number1 = [];
      int1 = [];
      para.textContent = '0';
      clearSwap = true;
    }
    else if (swap == true){
      clear.textContent = 'AC'
      number2 = [];
      int2 = [];
      para.textContent = '0';
      clearSwap = true;
    }
  }
  else if (clearSwap == true) {
    allClear()
  }
}
function allClear() { // will reset the Calculator
    number1 = [];
    number2 = [];
    answer = [];
    int1 = [];
    int2 = [];
    i = 0;
    swap = false;
    para.textContent = '0';
    clearSwap = false;
    clear.textContent = 'C';
}

function display(number) { // displays the numbers
  para.textContent = number;
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
const neg = document.querySelector('#neg');
const dot = document.querySelector('#dot');
const pow = document.querySelector('#power');
const result = document.querySelector('#result');
const para = document.createElement('p');
para.textContent = '0'
const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const mult = document.querySelector('#mult');
const div = document.querySelector('#div');
const equal = document.querySelector('#equal');
result.appendChild(para);

// buttons
one.addEventListener('click', () => {return storeNumber('1');})
two.addEventListener('click', () => {return storeNumber('2');});
three.addEventListener('click', () => {return storeNumber('3');});
four.addEventListener('click', () => {return storeNumber('4');});
five.addEventListener('click', () => {return storeNumber('5');});
six.addEventListener('click', () => {return storeNumber('6');});
seven.addEventListener('click', () => {return storeNumber('7');});
eight.addEventListener('click', () => {return storeNumber('8');});
nine.addEventListener('click', () => {return storeNumber('9');});
zero.addEventListener('click', () => {return storeNumber('0');});
dot.addEventListener('click', () => {return storeNumber('.');});
neg.addEventListener('click', () => { return storeNumber('-');});

add.addEventListener('click', () => {return addOperator('+');});
sub.addEventListener('click', () => { return minusOperator('-');});
div.addEventListener('click', () => { return divideOperator('÷');});
mult.addEventListener('click', () => { return multiplyOperator('x');});
pow.addEventListener('click', () => { return });


equal.addEventListener('click', () => { return operate(int1, op, int2);});
clear.addEventListener('click', () => {return Clear();});



/*
  test_array = 2+5x1
  maybe try to filter the array to get each operation type:
  indexOfPlus = test_array.indexOf('+')
  let a  = test_array[indexOfPlus-1]
  let b = test_array[indexOfPlus+1]
  plus(a,b)
  test_array.indexOf() for '-'
  test_array.indexOf() for 'X'
  test_array.indexOf() for '/'


*/

/*
problem 1: can enter multple negatives 
*/

/*
qoflc: make buttons change color slightly 
*/