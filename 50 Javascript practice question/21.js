factorial

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(5));


//factorial using arrow function

const fact = (num) => {
    if (num === 1) {
        return 1;
    }
    else {
        return num * fact(num - 1)
    }
}
console.log(fact(6));