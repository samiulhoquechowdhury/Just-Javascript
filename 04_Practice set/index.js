//Q:creata a varuable string and try to add a number to it

let a = "samiul";
let b = 6
console.log(a + b)//when we add anything to string it will concatenate it.


// #####Q: use typeOf operator to find the type of the above question.
console.log(typeof(a+b));



//problem 3: create a const object in js . can you change it to hold a number later.  
const data = {
    name: "samiul",
    section: 1,
    isPrinciple: false
};

// data = 4; // answer is "no".


//problem 4 :
// data = {};   //error
data['friend'] = "Ritika";
data['name'] = "Lovish";
console.log(data);
/**
 *problem 5
 * 
 */

 const dict = {
    happy: "feeling or showing pleasure or contentment",
    brave: "ready to face and endure danger or pain",
    swift: "moving or capable of moving at high speed",
    humble: "having or showing a modest or low estimate of one's importance",
    faith: "complete trust or confidence in someone or something"
 };

 console.log(dict.brave)