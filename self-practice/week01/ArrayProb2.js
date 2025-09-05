/* Write a function named arrpos that receives an array of numbers named <positives>.
This function keeps only positive numbers in the array 
and removes everything else from the array
and returns the number of removed items. 
Make sure that all contents in the array remains in the same order. 
No requirement to validate input data.
e.g., 
let p = [-40, 30, 80, -20, -40, 50]
arrpos(p) -> return 3; and p becomes [30, 80, 50]
let r = [-5, Infinity, 0, -Infinity, -3, NaN, -7]
arrpos(r) -> return 6; and r becomes [Infinity]
*/

function arrpos (positives) {
    let count = 0;
    for (let i = positives.length-1; i >= 0; i--) {
        if (positives[i] > 0) continue
        positives.splice(i,1)
        count++;
    }
    return count
}
let p = [-40, 30, 80, -20, -40, 50]
console.log(arrpos(p));