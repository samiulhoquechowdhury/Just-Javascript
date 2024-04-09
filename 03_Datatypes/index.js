//  Primitive datatypes in javascript
/**
 ####  NN BB SS U   ###
 * N-> NULL
 * N -> NUMBER
 * B -> BOOLEAN
 * B -> BIG-INT
 * S -> SYMBOL
 * S -> STRING
 * U -> UNDEFINED
 */

let a = null;
let b = 342;
let c = true;
let d = BigInt("322") + BigInt("32");
let e = "Samiul"
let f = Symbol("I am a symbol");
let g = undefined;

console.log(d);

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));



/**
 * object
 * 
 * object is a non-primitive datatype.
 */


//NON-PRIMITIVE DATATYPES.
const items = {
    "Samiul" : true,
    "Rahul" : false,
    "Jisnu" : 23,
    "anish": undefined
};

console.log(items["Samiul"]);
console.log(items.Samiul);