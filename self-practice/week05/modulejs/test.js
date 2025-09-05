// const { echo } = require("./lib/utilities.js")
// const { getLength, GPA, book } = require("./lib/utilities.js")

console.log(echo("Today is a present."))

// console.log(getLength("JS Beginner")); // not allow function (export)
// console.log(GPA);

// const b1 = new book(1234);
// console.log(b1);

import { echo, GPAAverage, Bookclass } from "./lib/utilities.js"

// import getLength with name "getStringLength"
import getStringLength from "./lib/utilities.js"
console.log(getStringLength("Hi everyone!"))

//2. 
