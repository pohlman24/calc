let bigArray = [];
let answer;
let int1;
let int2;
let swap = false;
let op;
let equation;
let decimal;
let fakeString = [] // this is just for my testing


function plus(num1, num2) {
  return(num1 + num2);
}

function minus(num1, num2) {
  return (num1 - num2);
}
function times(num1, num2) {
  return (num1 * num2);
}
function divided(num1, num2) {
  return (num1 / num2);
}

function operate(num1, operater, num2) {
  if (operater == '+') {
    answer = plus(num1, num2);
    bigArray = []
    return(display(answer));
  }else if (operater == '-') {
    answer = minus(num1, num2);
    return(display(answer));
  }else if (operater == 'x') {
    answer = times(num1, num2);
    return(display(answer));
  }else if (operater == '÷') {
    answer = divided(num1, num2);
    return(display(answer));
  }
}

/*function store(number){
  if (swap == false && number != '+' && number != '-' && number != 'x' && number != '÷'){ // if input is a number
    //console.log('swap is ' + swap);
    number1.push(number);
    int1 = number1.join('');
    int1 = parseFloat(int1);
    if (number == '.'){
      return (display(int1 + '.'));
    }else {
      return (display(int1));
  }

  }else if (swap == false && number == '+' || number == '-' || number == 'x' || number == '÷' || number == '='){ // if input is anything but a number
    swap = true;
    //console.log('swap was false and now is ' + swap)
    if(answer.length >= 1){ // if you have aleady entered a problem and want to operate on the answer
      int1 = answer[z];
      number2 = [];
      swap = true;
    }
    op = number; // idk why but i need to store the number input as a varible in order to call it later
    equation  = int1 + ' ' + op + ' '; //
    return (display(equation));

  }else if(swap == true && number != '+' && number != '-' && number != 'x' && number != '÷') { // if input is a number and entered after operator
    //console.log('swap is ' + swap);
    number2.push(number);
    int2 = number2.join('');
    int2 = parseFloat(int2);
    if (number == '.'){
      return (display(equation + int2 + '.'));
    }else{
      return (display(equation + int2));
  }

  }else if (swap == true && number == '+' || number == '-' || number == 'x' || number == '÷' || number == '='){ // repeat of above but different swap value
    swap = false;
    //console.log('swap was true and is now ' + swap)
    if(answer.length >= 1){
      int1 = answer[z];
      number2 = [];
      swap = true;
    }
    op = number;
    equation = int1 + ' ' + op + ' ';
    return(display(equation));
  }
} */
function store(inputedNumber) {
  if(typeof answer !== 'undefined'){ // if adding to an answer
    bigArray[0] = answer;
    bigArray.push(inputedNumber);
    int1 = bigArray.join('');
    int1 = int1.split('+');
    if (inputedNumber == '+'){ // just for display
      return(display(answer + ' +'))
    }else {
    return (display(answer + ' + ' + int1[1]))
    }
  }else{
  bigArray.push(inputedNumber);
  int1 = bigArray.join('');
  int1 = int1.split('+');
  if (inputedNumber == '+'){
    op = inputedNumber;
    return(display(int1[0] + ' + '))
  }
  if (int1.length >= 2){
    return(display(int1[0] + ' + ' + int1[1]))
  }
  return (display(int1));
  }
}

function Clear() { // will reset the Calculator
  bigArray = [];
  int1 = []
  para.textContent = ''
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
const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const mult = document.querySelector('#mult');
const div = document.querySelector('#div');
const equal = document.querySelector('#equal');
result.appendChild(para);

//buttons
one.addEventListener('click', () => {return store('1');});
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
equal.addEventListener('click', () => {return operate((parseFloat(int1[0])),op,(parseFloat(int1[1])))});
clear.addEventListener('click', () => {return Clear();});
/*
----------------------------------------------------------------------------------------
let players = [
  {name: 'Alex', initiative: 20,},
  {name: 'Jake', initiative: 8,},
  {name: 'Taylor', initiative: 16,},
];
players.sort(function (a, b) {
  return b.initiative - a.initiative;
});
for (i = 0; i< players.length; i++) {
  console.log(players[i].name +  ' rolled a ' + players[i].initiative);
}
console.log(players[0].name + ' is going first')
*/
