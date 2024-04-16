
let p = new Promise((resolve, reject) => {
    console.log("Promise is pending.");
    setTimeout( () => {
        alert("I am a promise and i am rejected.")
        resolve(true)
    }, 3000)
});

console.log(p);


let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending.");
    setTimeout( () => {
        alert("I am a promise and i am rejected.")
        reject(new Error("I am an Error."))
    }, 5000)
});

// console.log(p2);

p1.then((value) => {
    console.log(value);
});

p2.catch((error) =>{
    console.log("Some error are there in p2.");
});