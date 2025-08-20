//Problem from AI
//Write a function reverseWords(sentence) that takes a string and returns the string with each word reversed, but the word order remains the same. If the input is null or undefined, return undefined.

function reverseWords(sentence) {
    if (sentence == null) return undefined;
    return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");
  }

console.log(reverseWords('Hello World')) 
// 'olleH dlroW'

console.log(reverseWords('Do your best')) 
// 'oD ruoy tseb'

console.log(reverseWords(null)) 
// undefined3