/**
 * *Map create a new array by performing some operation on each element array.
 */

let arr = [12,23,34];
let a = arr.map((value, index, array)=>{  //map is used when we want to create a new array.
    // console.log(value, index, array)
    return value + 1;
});

// console.log(a)



//filter
let a1 = [1,2,3,4,5,6,8,7,5,3,3,4,6,6];
let a2 = a1.filter((a)=> {
    return a > 4;
})
// console.log(a2);



//reduce
// let arr3 =[1,2,3,4,5,6,43,21,3,4,56];
// let newarr3 = arr3.reduce((h1,h2) => {
    //     return h1 + h2
    // })
    // console.log(newarr3)
    
    //another method
    
let arr3 =[1,2,3,4,5,6,43,21,3,4,56];
const reduce_func = (h1, h2) => {
    return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func);
console.log(newarr3);