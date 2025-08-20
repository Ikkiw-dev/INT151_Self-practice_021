//021 undefined
function sum (...nums) {
    return nums.reduce((acc, cur) => acc + cur, 0)
}

console.log(sum(5,6,7,8,9));

console.log(typeof sum);