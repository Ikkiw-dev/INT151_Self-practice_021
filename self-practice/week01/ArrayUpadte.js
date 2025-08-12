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
console.log(arrty);//code returns : [ 'shrimp', 'herb', 'Lime', 'chilli', 'delicious']





