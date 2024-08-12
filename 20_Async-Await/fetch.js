// async function fetchUserData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         const user = await response.json();
        
//         console.log("User Data:", user);
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//     }
// }

// fetchUserData();


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function sequentialTasks() {
//     console.log("Task 1: Start");
//     await delay(1000);
//     console.log("Task 1: End");

//     console.log("Task 2: Start");
//     await delay(2000);
//     console.log("Task 2: End");

//     console.log("Task 3: Start");
//     await delay(1500);
//     console.log("Task 3: End");

//     console.log("All tasks completed.");
// }

// sequentialTasks();


// function delay(ms, result) {
//     return new Promise(resolve => setTimeout(() => resolve(result), ms));
// }

// async function parallelTasks() {
//     console.log("Starting parallel tasks...");

//     const task1 = delay(1000, "Task 1 Completed");
//     const task2 = delay(2000, "Task 2 Completed");
//     const task3 = delay(1500, "Task 3 Completed");

//     const results = await Promise.all([task1, task2, task3]);

//     console.log("All tasks completed:", results);
// }

// parallelTasks();
