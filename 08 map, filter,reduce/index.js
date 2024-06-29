//map filter and reduce are the higher order array methods

let arr= [32,54,12,76,10];
let result = arr.map((value, index,array)=>{
    console.log(value, index, array);
    return value + 1;
})
console.log(result)
//map create a new array by performing some operation on it.

let arr2 = [1,2,3,4,5,6,7];
let result2 = arr2.filter((value)=>{
    return value <= 5;
})
console.log(result2);