//Class 2 : Objects
//undefine 021

//object literal
let a = {
    "Name": "Pongsatorn",
    "Menu":{
        "Food": "Steak with side dish",
        "Beverage": "Lemon Tea"
    }
}

let ob2 = {
    Name: "Ikkyu",
    Number: 21,
    boolean: true,
    subdetails: {
        Man: true,
        likenum: [21,1,2],
        null: null,
        love: {
            Media: "Netflix",
            category: "Food show",
            artistfunc: function() {
                return "The Carpenters";
            }
        }
    }
}

//object constructor function
function Person(Name,Lastname,Number,Section) {
    this.Name = Name
    this.Lastname = Lastname
    this.Number = Number
    this.Section = Section
}
let myPerson = new Person("Kitti","Chaem",20,"A")
console.log(myPerson);

//021
//undefine
class Persons {
    constructor(name) {
        this.name = name
    }
 
    getName() {
        return this.name
    }
}

let per1 = {
    firstname: "Pongsatorn",
    lastname: "Liao",
    age: 20
}

for (const key in per1) {
    console.log(key)
    console.log(per1[key])
}

let newPerson = new Persons("Kittihengcharoen")
console.log(newPerson);

function dosomething() {
    
}