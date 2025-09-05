//named export
function echo (msg) {
    return msg
}

//default export
function getLength(str) {
    return str.length
}

const GPAAverage = 3.0
class book {
    constructor (isbn) {
        this.isbn = isbn;
    }
}
// module.exports = { echo, getLength, GPA: GPAAverage, book } //default export
// //object syntax //{echo:echo}

//1. transform individual export to export list and adding export book class
export { echo, getLength as default, book as Bookclass, GPAAverage}

