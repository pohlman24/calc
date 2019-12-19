//okay how the fuck am i going to do this;
let number1 = [];
let number2 = [];
let answer = [];
let num_of_op = 0;
let int1;
let int2;
let swap = false;
let op;
let test;
let i = 0;
let z = -1;
let array;
let blah;
let decimal;
let fakeString = '2 4 + 1 7'


let plusMath = function plus(a, b) {
  return (a + b);
}

function minus(a, b) {
  return (a - b).toFixed(8);
}
function times(a, b) {
  return (a * b).toFixed(8);
}
function divided(a, b) {
  return (a / b).toFixed(8);
}

function operate(a, operater, b) {
  if (operater == '+') {
    answer[i] = plusMath(a, b);
    int1 = answer[i];
    int2 = [];
    blah = answer[i];
    i++;
    z++;
    console.log(plusMath.toString().split('.')[1]);
    return(display(blah));
  }else if (operater == '-') {
    answer[i] = minus(a, b);
    int1 = answer[i];
    int2 = [];
    blah = answer[i];
    i++;
    z++;
    return(display(blah));
  }else if (operater == 'x') {
    answer[i] = times(a, b);
    int1 = answer[i];
    int2 = [];
    blah = answer[i];
    i++;
    z++;
    return(display(blah));
  }else if (operater == '÷') {
    answer[i] = divided(a, b);
    int1 = answer[i];
    int2 = [];
    blah = answer[i];
    i++;
    z++;
    return(display(blah));
  }
}

function store(number){
  if (swap == false && number != '+' && number != '-' && number != 'x' && number != '÷'){ // if input is a number
    //console.log('swap is ' + swap);
    number1.push(number); // add inputed number into number1 array
    int1 = number1.join(''); // combine numbers from number1 array into one string
    int1 = parseFloat(int1); // turn string into a float
    if (number == '.'){
      return (display(int1 + '.'));
    }else {
      return (display(int1)); // display number on Calculator
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
    test = int1 + ' ' + op + ' '; // store the imput number and operater as varible to display it
    return (display(test)); // displays the first number and operater

  }else if(swap == true && number != '+' && number != '-' && number != 'x' && number != '÷') { // if input is a number and entered after operator
    console.log('swap is ' + swap);
    number2.push(number); // adds the inputted number to array
    int2 = number2.join(''); // combines array into one string and stores as a new varible
    int2 = parseFloat(int2); // turns string into a float
    if (number == '.'){
      return (display(test + int2 + '.'));
    }else{
      return (display(test + int2)); // displays the previous inputed number and operator,test, and the new inputed number
  }

  }else if (swap == true && number == '+' || number == '-' || number == 'x' || number == '÷' || number == '='){ // repeat of above but different swap value
    swap = false;
    //console.log('swap was true and is now ' + swap)
    if(answer.length >= 1){ // if you have aleady entered a problem and want to operate on the answer
      int1 = answer[z];
      number2 = [];
      swap = true;
    }
    op = number;
    test = int1 + ' ' + op + ' ';
    return(display(test));
  }
}

function Clear() { // will reset the Calculator
  number1  = [];
  number2 = [];
  answer = [];
  int1 = [];
  int2 = [];
  i = 0;
  z = -1;
  blah = 0;
  swap = false;
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

/*

Problem: cant do consectuive operaters
  example: 1 + 1 + 1 will not work; results in in 11 + 1

  i think this is because you flip the switch when you enter a OP and their are only 2 options for the switch: True or false
so when you try to do a 2nd OP it will change add the new numbers omto the first number
  --so how do i have the inputed nubers go into one varible and have the computer know that whenever a OP is seleceted to store all the new inputed numbers into
-- another vaible, and more numbers into another varble
++++++ so when you click a number it will create an array. each number you click will go inside that array and then the arrya will all be combined into a float
++++++ and that float into a usable varible; then once you click and OP


+++++++ i need to make it so that equl button also changes the switch key .


okay so i have the inputed numbers and OP going to an array and then do the .join(' ') function to turn all that into one string. then do the .split()
but my issue is the seperator







*/
