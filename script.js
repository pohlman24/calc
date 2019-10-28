/*
okay how the fuck am i going to do this;
*/
let number1 = [];
let number2 = [];
let answer = [];
let int1;
let int2;
let swap = false;
let op;
let test;
let ran;
let i = 0;

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function times(a, b) {
  return a * b;
}
function divided(a, b) {
  return a / b;
}

function operate(a, operater, b) {
  if (operater == '+') {
    answer[i] = plus(a, b);
    i++;
    return(display(answer))
  }else if (operater == '-') {
    answer[i] = minus(a, b);
    i ++;
    return(display(answer))
  }else if (operater == 'x') {
    answer[i] = times(a, b);
    i++;
    return(display(answer))
  }else if (operater == '÷') {
    answer[i] = divided(a, b);
    i++;
    return(display(answer))
  }
}

function store(number){
  if (swap == false && number != '+' && number != '-' && number != 'x' && number != '÷'){
    number1.push(number);
    int1 = number1.join('');
    int1 = parseFloat(int1);
    if(answer.length >= 1){
      int1 = answer[i];
    }
    return (display(int1));
  }else if(swap == true && number != '+' && number != '-' && number != 'x' && number != '÷') {
    if(answer.length >= 1){
      number2 = [];
    }
    number2.push(number);
    int2 = number2.join('');
    int2 = parseFloat(int2);
    return (display(test + int2));
  }else if (number == '+' || number == '-' || number == 'x' || number == '÷' || number == '=' && swap == false){
    swap = true;
    op = number;
    test = int1 + ' ' + op + ' ';
    return (display(test));
  }else if (number == '+' || number == '-' || number == 'x' || number == '÷' || number == '=' && swap == true){
    swap = false;
    op = number;
    test = int1 + ' ' + op + ' ';
    return(display(number));
  }
}

function display(number) {
  para.textContent = number;
}

function Clear() {
  number1  = [];
  number2 = [];
  para.textContent = ''
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
const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const mult = document.querySelector('#mult');
const div = document.querySelector('#div');
const equal = document.querySelector('#equal');
result.appendChild(para)

//buttons
one.addEventListener('click', () => {return store('1');})
two.addEventListener('click', () => {return store('2');});
three.addEventListener('click', () => {return store('3');});
four.addEventListener('click', () => {return store('4');});
five.addEventListener('click', () => {return store('5');});
six.addEventListener('click', () => {return store('6');});
seven.addEventListener('click', () => {return store('7');});
eight.addEventListener('click', () => {return store('8');});
nine.addEventListener('click', () => {return store('9');});
zero.addEventListener('click', () => {return store('0');});
dot.addEventListener('click', () => {return store('.');});
add.addEventListener('click', () => {return store('+');});
sub.addEventListener('click', () => {return store('-');});
div.addEventListener('click', () => {return store('÷');});
mult.addEventListener('click', () => {return store('x');});
equal.addEventListener('click', () => {return operate(int1,op,int2);});
clear.addEventListener('click', () => {return Clear();});


// okay so how do i get numbers into the number1 array and the other numbers into number2 after the operater button is pressed?
// have input numbers go into ann array.
// MOTHER FUCKING EUREKA
// i need to have two arrays and an varible set to false, and once you press any of the operater buttons
// it will turn the varible to true.
// while the varible is false all the input numbers will be added to number1 and while true they will be added to number2.
// turn arrays into strings, then strings into intergers.
// then when you press the equal button it will call the operate function.


//okay so know i need it to be set so that when you get an answer that answer will be stored in a array and
//when you want to do another operator to it, it will take the array[i] and then plug that into the operater function
//then that new answer will be stored in as array[1] and repeat.
//each time you get a new answer i goes up.
