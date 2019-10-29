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
    in1 = answer[i];
    int2 = [];
    blah = answer[i];
    i++;
    z++;
    return(display(blah));
  }else if (operater == '-') {
    i++;
    answer[i] = minus(a, b);
    int1 = answer[i];
    return(display(answer[i]));
  }else if (operater == 'x') {
    i++;
    answer[i] = times(a, b);
    int1 = answer[i];
    return(display(answer[i]));
  }else if (operater == '÷') {
    i++;
    answer[i] = divided(a, b);
    int1 = answer[i];
    return(display(answer[i]));
  }
}

function store(number){
  if (swap == false && number != '+' && number != '-' && number != 'x' && number != '÷'){ // if input is a number
    number1.push(number); // add inputed numbers to array
    int1 = number1.join(''); // combine numbers into one string
    int1 = parseFloat(int1); // turn string into a float
    return (display(int1)); // display number on Calculator
  }else if (swap == false && number == '+' || number == '-' || number == 'x' || number == '÷' || number == '='){ // if input is anything but a number
    swap = true;
    if(answer.length >= 1){ // if you have aleady entered a problem and want to operate on the answer
      int1 = answer[z];
      number2 = [];
      swap = true;
    }
    op = number; // idk why but i need to store the number input as a varible in order to call it later
    test = int1 + ' ' + op + ' '; // store the imput number and operater as varible to display it
    return (display(test)); // displays the first number and operater
  }else if (swap == true && number == '+' || number == '-' || number == 'x' || number == '÷' || number == '='){ // repeat of above but different swap value
    swap = false;
    if(answer.length >= 1){ // if you have aleady entered a problem and want to operate on the answer
      int1 = answer[z];
      number2 = [];
      swap = true;
    }
    op = number;
    test = int1 + ' ' + op + ' ';
    return(display(test));
  }else if(swap == true && number != '+' && number != '-' && number != 'x' && number != '÷') { // if input is a number and entered after operator
    number2.push(number); // adds the inputted number to array
    int2 = number2.join(''); // combines array into one string and stores as a new varible
    int2 = parseFloat(int2); // turns string into a float
    return (display(test + int2)); // displays the previous inputed number and operator,test, and the new inputed number
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

function display(number) { // displays the
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

new problem: you cant have multiple operation symbols, because of having it set up that whenever you click it opertation
symbol it switches a switch to true or flase, so trying to have more than one just overwrites one of the two arrays.
need to some how auto generate a array whenever the operation button is presses
but then wont that mess up my operate function because that can only take 2 numbers and 1 operater?
or do i make it so that it will run the operate function on the first set of numbers, then store that value into a varible
then use that varible answer as a argument for operate function.. so basically the same way that imn solving the issue
of doing a math problem and then just adding another number on top of that answer.

to auto generate the array whenever an operation button is entered, i need to make num_of_op = 0,
for each num_of_op i need to make a new array, and store then new input number in side it.
then use that to get an answer but dont display it, just use it to get the final answer.

okay so what i do this, when ever the store function is called it will increase the value of num_of_op and also
create an array. let array + toString(num_of_op) = (number);

new problem: whne you do a math problem and then try to add a number to the answer it only accepts single digit numbers
 if do 1 + 2 = 3------- int1 should be
*/
