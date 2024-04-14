//synccrounously programming

let a = prompt("What is your name?")
let b = prompt("What is your age?")
let c = prompt("What is your RollNo.?")
let d = prompt("What is your favourite color ?")
console.log( "Your name is "+ a + ", your age is " + b + " your RollNo is " + c + " and favourite color is " + d);




//asynchronous programming.

console.log("start");
setTimeout(function(){
    console.log("Hey i am good");
}, 3000);
console.log("End");