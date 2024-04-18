//! Question 1: palindrome Number:
//an integer is a palindrome when it reads the same forewarn and backward.
//Input : x = 121 ------>>>>>> Output: true
//Input : x = 1200 ------>>>>>> Output: false


/************Code*************/


// const isPalindrome = function(x){
//     return x === +x.toString().split("").reverse().join("");
// };
// const result = isPalindrome(1234321);
// console.log(result);




// 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121" --->>>> By using a + operator before the x(argument) convert it into number.


/**Now lets do it in more optimised way**/

const isPalindrome = function(x){
   
    return x<0 ? false : x === +x.toString().split("").reverse().join("");
};
const result = isPalindrome(1234321);
console.log(result);