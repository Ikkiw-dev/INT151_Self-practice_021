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

//examples :
const [tomatoes, mushrooms = 'mshs'] = ['tmts']
console.log(mushrooms) //code returns : undefined, not have any value assigned to it (before self-assigned value)

//destructuring it self by assign value to it, after that the value of mushrooms will turns to the value that have assigned

//skipping a value in an array
const [a, ,c] = ['ant','bird','cat']

//Spreaad, Rest Operator
const [d,e,...f] = ['dof','elephant','fish','giraffe','horse','intelligence','jaguar']
console.log(f); //code returns : [ 'fish', 'giraffe', 'horse', 'intelligence', 'jaguar' ]

const alpha = ['dof','elephant','fish','giraffe','horse','intelligence','jaguar']
const alphacopy = [...alpha]; //all the element come, mean like create new array
console.log(alphacopy); //same array
console.log(alpha === alphacopy); //turn false, not same references

//Desturcturing Use cases in JS - swap
let first = 1;
let second = 2;

[first,second] = [second,first];

console.log(first); //code returns : 2
console.log(second); //code returns : 1

//Merge the array with spread operator
let emotion = ['sad','happy'];
let veggies = ['broccoli','tomatoes','corn','carrot'];

let emoveg = [...emotion, ...veggies];
console.log(emoveg); //code returns : [ 'sad', 'happy', 'broccoli', 'tomatoes', 'corn', 'carrot' ]

//The array length property
const arrnum = [11,27,73];
const arrnum2 = new Array(7);
arrnum.length
console.log(arrnum.length); //code returns : 3
console.log(arrnum2.length); //code returns : 7

//The concat() method
let firstarr = [1,2,3];
let secarr = [4,5,6];
let merged = firstarr.concat(secarr);
console.log(merged); //code returns : [ 1, 2, 3, 4, 5, 6 ]

//not limit the quanitity of array that can concat (arr1,arr2,...arrN)

//The join() method
let bread = ['pie','chiffon','cake','rum']
let breadjoin = bread.join();
console.log(breadjoin); // returns : pie,chiffon,cake,rum
let breadjoin2 = bread.join(' and ');
console.log(breadjoin2); //returns : pie and chiffon and cake and rum

//The fill() method
let colors = ['blue','green','yellow']
let fill = colors.fill("pink");
console.log(fill); //code returns : [ 'pink', 'pink', 'pink' ]

//The includes() method
let name = ['bob','john','peter','alex'];
console.log(name.includes('tom')); //false
console.log(name.includes('bob')); //true

//The indexOf() method
name.indexOf('alex'); // 1
name.indexOf('rob'); // -1
//lastIndexOf()

//The reverse() method
let names = ['bob','john','peter','alex'];
console.log(names.reverse()) //returns : [ 'alex', 'peter', 'john', 'bob' ]

//The sort() method
// The default sort() method converts the element types into strings









