//1 : addProperty sol.
function addProperty (obj,key,value) {
    obj[key] = value; //add new property
    return obj; //return new object
}
console.log(addProperty({name : "John"},'age',25));

function addProperty2 (obj,key,value) {
    return {
        ...obj, //copy existing object
        [key]: value //add / overwrite new property
    };
}
console.log(addProperty2({name : "John"},'age',25));

function addProperty3 (obj,key,value) {
    let result = Object.entries(obj).reduce((acc, [k,v]) => {
        acc[k] = v;
        return acc;
    }, {[key]:value});
}
console.log(addProperty3({name : "John"},'age',25));

//2. mergeobject sol.
function mergeObject (obj1,obj2) {
    let merged = {...obj1, ...obj2}
    return merged;
}
// merged is now the union of obj1 and obj2. Properties in obj2 will overwrite those in obj1

console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))

//3. getFreqofwords
function getFreqOfWords (sentence) {
    if (!sentence) {return undefined};

    let words = sentence.toLowerCase().split(" ")

    let result = {};
    for (let word of words) {
        if(result[word]) {
            result[word]+= 1;
        }
        else {
            result[word] = 1;
        }
    }
    return result;
}
console.log(getFreqOfWords('Today is present and present is your gift'))

//4. extractandRename
// Object Restructuring concepts
function extractAndRename(obj) {
    const {name : fullName, age : yearsOld} = obj;
    return {fullName, yearsOld}
}

console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))

//5. MergeandDestructure
function mergeAndDestructure(obj1, obj2) {
    let merge2 = {...obj1,...obj2}

    const {name : name, age : age} = merge2;
    return {name, age};
}
console.log(mergeAndDestructure({ name: 'John', age: 25, city: 'New York' }))

//6. RemoveDuplicatewords
function removeDuplicateWords(sentence) {
    if (!sentence) return "";
  
    const words = sentence.split(" ");
    return words.filter((word, result) =>
      words.findIndex(w => w.toLowerCase() === word.toLowerCase()) === result
    ).join(" ");
  }
console.log(removeDuplicateWords("This is a test This test is easy."));

//7. findValue 
function findValue (arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = arr.reduce((sum, cur) => sum+cur, 0);
    let avg = arr.reduce((sum, cur) => sum+cur, 0) / arr.length;

return `{min : ${min}, max : ${max}, sum : ${sum}, avg : ${avg}}`
}
console.log(findValue([1,2,3,4,5]))

//8. converttoUppercase(arr)
function convertToUppercase (arr) {
   let res = String.prototype.toUpperCase.apply(arr).split(",");

   return res;
}
console.log(convertToUppercase(['hello','world']))