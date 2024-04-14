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
setTimeout(function(){
    console.log("Hello in 4 sec..")
}, 4000);

console.log("My name is " + " Sam.")
console.log(promise);



/**
 * Promise has two property
 * ->state.
 * ->Result.
 * 
 * 
 * 
 * why do we use promise?
 * 
 * >> Fetch google.com homepage ==>> console.log("google.com homepage done")
 * 
 *  >> Fetch data from the data api
 * 
 *  >> Fetch picture from the server
 * 
 *  >> Print Downloading
 * 
 *  >> Rest of the scipt.
 * 
 */

