//factorial
// 5 = 5*4*3*2*1

function factorial(num){
    if (num===1||num===0) {
        return 1;
    }
    else{
        let fact = 1;
        for(let i = 1;i<=num;i++){
            fact *=i
        }
        return fact;
    }
}
console.log(factorial(6))