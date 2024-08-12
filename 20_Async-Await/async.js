
//! Async Keyword:-
// ?Async keyword is used to declare a function as asynchromous. when a function is dec;ared eith async it automatically return a promise.This means you can use 'then()' to handle the result or can use 'await' inside another async function to wait for the result

//!Await Keyword
//? The await keyword can only be used inside an 'async' function .It pauses the execution of another async function , waiting for the promise to resolve . Once the promis resolve , it return the result , and the execution continues.

//example

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Fetched");
        }, 2000);
    })
}

async function getData() {
    console.log("fetching Data...");
    const result = await fetchData();
    console.log(result)
    return result;
}

getData().then((data) => {
    console.log("Data received:", data);
});


