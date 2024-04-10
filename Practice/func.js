function add(a, b) {
    return a + b;
};

const multiply = (a, b) => {
    return a * b;
};

const substruct = (a, b) => a - b;

const square = x => x * x ;

const number = [1,2,3,4,5,6];

const squareNumber = number.map(number => number * number);

console.log(add(12, 8));
console.log(multiply(4, 5));
console.log(substruct(5 , 2));
console.log(square(5));
console.log(squareNumber);