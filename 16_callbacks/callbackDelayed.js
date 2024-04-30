function delayedGreeting(name, callback) {
    setTimeout(function() {
        callback(name);
    }, 3000);
}

// Usage
function greet(name) {
    console.log(`Hello, ${name}!`);
}

delayedGreeting('Samiul', greet); // Output after 2 seconds: "Hello, Samiul!"
