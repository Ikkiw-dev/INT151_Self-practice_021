//1. (Prob from AI) เขียนฟังก์ชัน doubleNumbers(arr) ที่รับ array ของตัวเลข แล้วใช้ .map() เพื่อคืนค่า array ที่ทุกตัวคูณด้วย 2
function doubleNumbers (arr) {
    return arr.map((e) => e * 2);
}
console.log(doubleNumbers([1,2,3]))

//2. (Prob from AI) เขียนฟังก์ชัน filterEven(arr) ที่ใช้ .filter() เพื่อเลือกเฉพาะเลขคู่
function filterEven (arr) {
    return arr.filter((e) => e % 2 === 0);
}
console.log(filterEven([1,2,3,4,5,6]))

//3. (Prob from AI) เขียนฟังก์ชัน sumOddSquares(arr) เพื่อ ยกกำลังทั้งสองตัว, เก็บเฉพาะเลขคี่, บวกผลรวมทั้งหมด
function sumOddSquares (arr) {
    return arr
    .map((e) => e ** 2)
    .filter((num) => num % 2 !== 0)
    .reduce((acc,cur) => acc + cur, 0)
}
console.log(sumOddSquares([1,2,3,4]));

//4. (Prob from AI) เขียนฟังก์ชัน getNames(users) ที่รับ array ของ object และคืนค่าชื่ออย่างเดียวเท่านั้น
function getNames(users) {
    let Name = users.map((uname) => uname.name)

    return Name;
}

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
  ];

console.log(getNames(users));

//5. (Prob from AI) เขียนฟังก์ชัน groupByLength(words) เพื่อจัดกลุ่มคำตามความยาวของ string
function groupByLength (words) {
    return words.reduce ((res,s) => {
        let length = s.length;
        
        if (!res[length]) {
            res[length] = [];
        }
        res[length].push(s);
        return res
    },{});
}
console.log(groupByLength(["cat","dog","lion","hi","sun"]))
// { 2: ["hi"], 3: ["cat","dog","sun"], 4: ["lion"] }

//6. (Prob from AI) เขียนฟังก์ชัน uniqueValues(arr) เพื่อคืน array ที่มีค่าไม่ซ้ำกัน
function uniqueValues (arr) {
    return arr.reduce ((acc, cur) => {
        if(!acc.includes(cur)) {
            acc.push(cur);
        }
        return acc
    }, [])
}
console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]

console.log(uniqueValues(["apple", "banana", "apple", "orange", "banana"]));
// ["apple", "banana", "orange"]