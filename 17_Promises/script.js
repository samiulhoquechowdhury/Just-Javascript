//the solution of callback hell is promises

//syntax
let promise = new Promise(function(resolve, reject) {
    alert("Hello!");
    resolve(56)
});

console.log("Hello World !");

setTimeout(function(){
    console.log("Hello in 2 sec..")
}, 2000);

console.log("My name is " + " Sam.")
console.log(promise);
