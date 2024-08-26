/**
 * sum of natural numebr from 1 to 10
 */

function sumOfNaturalNumbers(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
let result = sumOfNaturalNumbers(5);
console.log(result);

//we can also implement it by using formula ======>>>>   n * n + 1

function sum(num){
    let sum = num *( num + 1)/2;
    console.log(sum)
}
sum(5);


//lets print from 1 to 10;

function numbers(num){
    for(let i = 1;i<=num; i++){
        console.log(i)
    }
}
numbers(10)