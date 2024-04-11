/**
 * *Map create a new array by performing some operation on each element array.
 */

let arr = [12,23,34];
let a = arr.map((value, index, array)=>{  //map is used when we want to create a new array.
    console.log(value, index, array)
    return value + 1;
});

console.log(a)


let a1 = [1,2,3,4,5,6,8,7,5,3,3,4,6,6];
let a2 = a1.filter((a)=> {
    return a > 4;
})
console.log(a2);