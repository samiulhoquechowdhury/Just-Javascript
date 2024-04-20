// var is_array = function(input) {
//     if (toString.call(input) === "[object Array]")
//       return true;
//     return false;   
//   };

//   console.log(is_array('w3resource'));

//   console.log(is_array([1, 2, 4, 0]));



// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,0]
// let arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//     arr3[i] = arr1[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//     arr3[arr1.length+i] = arr2[i];
// }
// console.log(arr3);

let data = [1, 2, 3, 4, 5];
let data2 = [6, 7, 8, 9, 0];
let data3 = [];

for (let i = 0; i < data.length; i++) {
    data3[i] = data[i];
}
for (let i = 0; i < data2.length; i++) {
    data3[data.length + i] = data2[i];
}
console.log(data3);
