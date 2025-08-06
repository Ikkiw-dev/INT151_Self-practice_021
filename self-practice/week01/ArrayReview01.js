//A
let a1 = ["Antiniod","Scifora","Telesa",0,true]

//1
console.log(a1)
//2
console.log(a1.length)
//3
console.log(a1[0])
//4
console.log(a1[a1.length-1]) //log the last by using variable
    //in case of using console.log(a1[a1]) the result turns "undefined"
//5
a1.push(["Youyee","Tanaew"])
a1.push({Name: 'Pongsatorn', Surname: 'Liao'})
//or a1[a1.length] = ["Banana","Strawberry"]

//6 print all items in the array
// version 1
for (let item of a1) {
    console.log(item)
}

// version 2
a1.forEach((element) => console.log(element));

// version 3
for(let i=0;i<a1.length;i++) {
    console.log(a1[i])
}

//7


//8
let a2 = 'LalaLiao'
let a2s = [...a2]
console.log(a2s)

//9
let a = new Array()
console.log(a)
let b = new Array(5)
console.log(b)
let c = new Array(1,'Pongsatorn',true)
console.log(c)

//10
const aaa = Array.of(10)
console.log(aaa)
const d = Array.from(c)
console.log(d)

//11
const [,,i1,,...i2] = [5,10,15,20,25]
console.log(i1)
console.log(typeof i1)//number
console.log(i2)
console.log(typeof i2)//object (array)



