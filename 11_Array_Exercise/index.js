/**
 * Q:create an array of number and take input from the user to add number to this array.
 */

//in jacascript the reduce function is  used to reduce an array into a single value

//the syntax for reduce() is:
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


//random question solution
const number = [1,2,3,4,5];
const sum = number.reduce((total, current) => total + current, 0);
console.log(sum);

