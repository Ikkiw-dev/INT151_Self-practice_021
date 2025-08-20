function greet(name, call) {
    return call(name);
}
function greetHello(n) {
    return "Hello, " + n;
}
console.log(greet("Pongsatorn", greetHello));

function Test(x) {
    return x
}
function Test2(x) {
    return x + 50
}

console.log(Test(Test2)(10));

function doSomething(a,b,...c) {
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(a,b,c)
}
doSomething(1,2,3,5,10,15);

function sum(...a) {
    let result = 0
    for (i=0; i < arguments.length;i++) {
        result = result+ a[i]
    }
    return result;
}

console.log(sum())
console.log(sum(1))
console.log(sum(1,2))
console.log(sum(1,2,3,5))