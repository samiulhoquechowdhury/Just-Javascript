document.write("Hello!")

let a = setTimeout(function(){
    alert("I am inside of setTime...")
}, 3000);


clearTimeout(a);  //nothing will happend after 5 sec.
console.log(a);   //in output the 1 will the timer id.
                  //if we want to clear time out we will use clearTimeout


//setInterval

setInterval(() => {
    // console.log("Hello!")
}, 3000);
