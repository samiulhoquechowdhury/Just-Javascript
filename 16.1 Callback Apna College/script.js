//promises
//it solve callback hell like problems.
//Promise is for "eventual" completion of tasks. It is an object in JS. It is a solution to callback hell.

let promise = new Promise((resolve, reject) => { 
    //resolve and reject are two handlers.
    console.log("I am a Promise.");
    resolve("success!")
})

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}






// getData(1, () => {
//     console.log("Getting Data 2....");
//     getData(2,() => {
//         console.log("Getting Data 3....");
//         getData(3, () => {
//             console.log("Getting Data 4....");
//             getData(4)
//         });
//     });
// });