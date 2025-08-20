function getFreqOfWords(sentence) {
    if (!sentence) {return undefined}
    let words = sentence.toLowerCase().split(" ")

    let result = {};

    for (let word of words) {
        if (result[word]) {
            result[word]+=1;
        }
        else {
            result[word] = 1;
        }
    }
    return result;
}

// function getFreqOfWords2(sentence) {
//     if (!sentence) {return undefined}
//     let words = sentence.toLowerCase().split(" ")

//     return [...words].reduce((acc,items) => {
//         if (!acc[items]) {
//             acc[items]= 1
//         }
//         else {
//             acc[items]++
//         }
//         return acc;
//     }, {})
// }

console.log(getFreqOfWords2('Today is present and present is your gift'));