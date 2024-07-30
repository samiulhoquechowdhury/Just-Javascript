let arr = [2,3,4,5,1];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let result = sum += arr[i]
}
console.log(result);