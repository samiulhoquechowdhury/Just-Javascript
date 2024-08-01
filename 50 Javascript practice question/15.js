//random number
function getRandomNumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(getRandomNumber(10,20));