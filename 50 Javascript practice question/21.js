//factorial

// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1)
//     }
// }
// console.log(factorial(5));


//factorial using arrow function

const factorial = (num) => {
    if (num === 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(5));