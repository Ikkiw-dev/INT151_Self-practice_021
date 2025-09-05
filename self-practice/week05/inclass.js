console.log(Array.isArray()); //false

const num1 = [1,2,3]
const num2 = [3,5,7]
console.log([...num1, ...num2]) //spread
console.log(num1.concat(num2)) //concat

console.log(num1.toString()) //convert array to string data type
console.log(num1.join("and")); // code returns : 1and2and3 (array to string with seperator)

console.log("mangoteen".includes("go")) //true
console.log("mangoteen".includes("Go")) //flase
console.log(["mangoteen", "mango"].includes("go")) //false
console.log(["mangoteen", "mango"].includes("Mango")) //false
console.log(["mangoteen", "mango"].includes("mango")) //false



const array14 = [1,1000,21,30,4];
let sort = array14.sort((x,y) => x - y);

console.log(sort);

const students = [
    {id : 665000102, name : "Suda", gpa : 2.5 },
    {id : 665005555, name : "Ada", gpa : 2.8 },
    {id : 665000103, name : "Pornchai", gpa : 3.25 },
    {id : 665000104, name : "Pornsak", gpa : 3.8 }
]

console.log(students.sort((a,b) => a.name.localeCompare(b.name.toLowerCase())));