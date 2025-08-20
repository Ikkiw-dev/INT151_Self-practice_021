// Source from online

//index
function listprobobj (name,sclass,rollno) {
    this.name = name
    this.sclass = sclass
    this.rollno = rollno
}

let newObj = new listprobobj("David Rayy","IT","21");
console.log(newObj)

//1 Write a JavaScript program to list the properties of a JavaScript object.

//Sample object:
//var student = {
//name : "David Rayy",
//sclass : "VI",
//rollno : 12 };
//Sample Output: name,sclass,rollno
function keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    let keys = [];
    for (let key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
{
    let type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(keys({Name: "Pongsatorn", Surname: "Liao", favcol: "white"}));

