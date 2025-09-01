// Javascript Functions (extensions)

// functions fundamentals
// core concepts : Instead the repeat code line by using same entity that have used before

// Terminologies
    // 1. Functions & Methods
    // 2. Declaration & Definition
    // 3. Arguments & Parameters
    // 4. Callback & Higher Order Function

// Function Declaration
// examples
function printme(name) {
    return name
}

console.log(printme("Pongsatorn")) // code returns : "Pongsatorn"

function printThis(param) {
    console.log(param)
}
printThis("Lalaliao"); // code returns : "LalaLiao"

// Note : Anything in the functions that you passed inside parenthesis is a parameter, but when you call the function that you're passing (actual value) called argument.
// The code in Line 23 Called arguments.

// function expressions
const print = function() {
    console.log('print');
};

print(); //code returns : print

const funcprintparam = function(a,b) {
    console.log(a,b);
}
funcprintparam(100,200); // code returns : 100, 200

//functions returning
    //let p = x(); // code returns : undefined
// Note : We have variable called p and the value is not a function (we get value from excuting function)

function sum(a, b) {
    return a + b;
}
console.log(sum(2,3)); // code returns : 5

function sum2(c, d) {
    let ret = c + d;
    return ret;
}

// Title : Default Parameters in JS functions
// examples:
function calc(a,b=0) {
    return (2*(a+b));
}

console.log(calc(2,3)); // code returns : 10
console.log(calc(3,3)); // code returns : 12
console.log(calc(3)); // code returns : NaN
// Why returns NaN? Because -> When you don't pass an argument for a parameter for the function, the parameter value will be undefined.
// In this case, We are not passing th e second argument
// But if we assinged the default value to some params, It means that If someone is not passing a value for this parameter, the value zero will be used instead.
// console.log(calc(3)); // code returns : 6 instead of NaN

// Title : Rest Parameters
// Rest Parameters -> somthing that allows a function to accept any number of arguments
// One function accepts one rest parameter only and the rest parameter must be the last parameter that define the function
function collectThings (x, ...y) {
    console.log(x); //code returns : undefined
    console.log(y); //code returns : undefined
}

let col = collectThings(1,2,23,24,25,39,44);
console.log(col); //code returns : 1 [ 2, 23, 24, 25, 39, 44 ]

//Title : Arrow Functions (fat arrow syntax)
const add = (c1,c2) => {
    return c1 + c2;
}

//Title : Nested Functions
function outer() {
    console.log('outer');
}
