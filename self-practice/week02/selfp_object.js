//shallow object quality
let Person1 = {
    Name: "Pongsatorn",
    Age: 19
}

let Person2 = {
    Name: "Pongsatorn",
    Age: 19
}

function shallowEquality (object1,object2) {
    const keys1 = Object.keys (object1)
    const keys2 = Object.keys (object2)

    if (keys1.length !== keys2.length) {
        return false
    }
    for (let key of keys1) {
        if(object1[key] !== object2[key]) { //key value accessing in object
            return false
        }
    }
    return true
}

console.log("shallow Equality :" + shallowEquality(Person1,Person2))

//conclusion : Shallow Equality ใน object คือการเทียบค่าระหว่าง object ทั้งสอง โดยที่ค่า key และ value ระหว่าง 2 object จะต้องเหมือนกันทุกประการ จึงจะ log ออกมาแล้วได้ true
