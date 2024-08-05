// implement a function to handle multiple api calls unsing callbacks

function makeAPICalls(url, callback){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.error("Error during API call:", err.message))
}

function handleData(data){
    console.log("Processes Data", data);
}

function main(){
    const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1'
    const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/2'

    makeAPICalls(apiUrl1, handleData);
    makeAPICalls(apiUrl2, handleData);
}

main();