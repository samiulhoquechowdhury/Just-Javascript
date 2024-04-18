//! question 2 - Fibonacci Number.
//Fibonacci Series- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.....

//F(n) = F(n - 1) + F(n - 2), for n > 1
//Input: n = 3 ------>>>>> Output: 2.

let fib = function(n) {
    const arr = [0, 1];

    for(let i = 2; i <= n; i++){
        arr.push(arr[i - 1] + arr[i - 2])
    }

    console.log(arr);;
}
fib(5);