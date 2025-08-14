// fundametals array recapturation
// source from e-learning

let arr1 = [100, true, "Pongsatorn", {}];
let arrty = ["shrimp","herb", "Lime","chilli","delicious"]

//array constuctor functions to create array
let anotherty = new Array("shrimp","herb", "Lime","chilli","delicious");

console.log(arrty)
console.log(anotherty)
console.log(arrty === anotherty) //code said false

let three = new Array(3);
console.log(three) //code return 3 empty items

let two = new Array(1,2);
console.log(two) //code return array that contains 1,2 inside the array

//way to access the elements in an array in JS
console.log(arr1[0]) //code return 100

for (let i=0; i<=arrty.length-1; i++) {
    console.log(`Element at index ${i} is ${arrty[i]}`)
}
//from this loop, codes return the address of index and the value in that index

// push() - add element at the end of an array
let ret = arrty.push("chefLalaLiao");
console.log(ret); //code returns the quantity of value in that array after the insertion
console.log(arrty); //code returns the base value of arrty array and the new value 'chefLalaLiao' on the last one

//unshift() - add element at the beginning of an array
let unret = arrty.unshift("Tomyum");
console.log(unret); //code returns number of value in array
console.log(arrty); //code returns the array that have new value at the beginning point of an array

//how to remove element from an array
//using pop() method to remove element from an array
console.log(arrty) //base array returning
arrty.pop();
console.log(arrty); //code returns the array that the last value (chefLalaLiao) are removed by pop() function

//shift() remove the beginning of an array
arrty.shift();
console.log(arrty); //code returns : [ 'shrimp', 'herb', 'Lime', 'chilli', 'delicious']


//copying and cloning array in JS
//using method slice() to copy an array in JS
let arrtycopy = arrty.slice();
console.log(arrtycopy); //code returns : [ 'shrimp', 'herb', 'Lime', 'chilli', 'delicious']
console.log(arrty === arrtycopy); //code returns : false, not the same references or array


//How to determine if a Value is an Array in JS?
Array.isArray() //static method
const arr = [1,2,3,4]
Array.isArray(arr) //code must returns true

//Array destructing in JS
//New sytax to extract multiples elements from array
let shrimp = arrty[0];
let herb = arrty[1];

//more shortcut way : array destructuring
let [tomato, mushroom, carrot] = ['tmt','msh','crt']
console.log(tomato,mushroom,carrot) //code returns : tmt msh crt

//How to assign a default value to a variable?

