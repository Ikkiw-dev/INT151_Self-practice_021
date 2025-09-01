// Class 04 : JS Arrays Methods

const words = ["apple","mango","orange","banana"]

wordrv = words.reverse();
console.log(wordrv); // code returns : ["apple","mango","orange","banana"]

//word.reverse()
//console.log(words)
//1. annonymous arrow function (ต้องการ function เป็น parameter)
strtawords = words.filter((word) => word.startsWith("a")) //function ที่ไม่มีชื่อ ไม่ได้ต้องการให้มันทำต่อในอนาคต
//filter เป็น function ที่ต้องการ callback function


//2. annonymous function declaration (เรียกใช้ function นี้แค่ครั้งเดียว)
const strtawords2 = words.filter(function (word){  //word คือ params
    return word.startsWith("a") //เรียกการทำงานไปใช้ตามจำนวน index ของ array
});


//3. name arrow function
// อ้างถึงได้มากกว่า 1 ครั้ง และสามารถเรียกกลับมาใช้งานได้อีก 👍🏻
const checkStartA = (word) => word.startsWith("a")
const startwords3 = words.filter(checkStartA);


//4. named function declaration
function checkstartA3 (word) {
    return word.startsWith("a")
}
const start = words.filter(checkstartA3)


const wordsforeach = [];
words.forEach(function (word) {
  if(word.startsWith("a")) {
    wordsforeach.push(word)
  }
})


console.log(wordsforeach);

const employees = [
    {
      id: 'e1001',
      firstname: "Somchai",
      lastname: "Jaidee",
    },
    {
      id: 'e1002',
      firstname: "Pornchai",
      lastname: "Deejai",
    },
    {
      id: 'e1005',
      firstname: "Suda",
      lastname: "Rakdee",
    },
  ]

  let nameemployees = employees.map((name) => name.firstname.toUpperCase() + " " + name.lastname.toUpperCase())
  console.log(nameemployees);
 
  //021 undefine

  const Jaiquery = employees.map((name) => name.firstname.toUpperCase() + " " + name.lastname.toUpperCase()).filter((jai) => jai.toUpperCase().includes("JAI"))

  console.log(Jaiquery);
  

const carts = [
    { productId: 1002, price: 10, amount: 5 },
    { productId: 2005, price: 100, amount: 2 },
    { productId: 5001, price: 5, amount: 4 },
  ]

const totalamount = carts.reduce((totalval,curval) => totalval += (curval.price * curval.amount),0)
const netprice = totalamount * 1.07

console.log(netprice.toFixed(2));

  //net price = total price * VAT 7%

const frt = ["apple","orange","banana"]

frt.fill(null, 1);
console.log(frt);