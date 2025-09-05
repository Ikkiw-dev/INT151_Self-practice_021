/* This function computes the average value of all elements in <coll>
and returns the summation of all values that are greater than the average.
No requirement to validate input data.
e.g.,
aval([5,7,11,1,9,3]) -> return 27 (because the average is 6; 7,9, and 11 are above average)
aval([8]) -> return 0 (because the average is 8; there is nothing above average)
aval([9,9,9,9]) -> return 0 (because the average is 9; there is nothing above average)
aval([7,11,300]) -> return 300 (because the average is 106; only 300 is above average)
*/

function aval (coll) {
    if (coll.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i=0; i < coll.length; i++) {
        sum += coll[i]
    }
    let avg = sum / coll.length;
    sum = 0;
    for (let i=0; i < coll.length;  i++) {
        if (coll[i] > avg) {
            sum += coll[i]
        }
    }
    return sum;
}
console.log(aval([5,7,11,1,9,3]));