/**
 * let vs const vs var.
 */

console.log("Hello World!");

var a = 45;
let b = "Samuil";
b = "Rahul"//we can update the value of b but cannot redeclared it, else it will through error.
//But with var we can.
var c = null;
var d = undefined;

{
    //we can create block scope elements using let and const.But with var we cannot.
    let b = "this";
    console.log(b)
}
console.log(b)

//const

const author = "samiul" //we use const when we know thwt the will not change, and we want to keep it constant.


// author = "jisnu"

// let author = " rahul"// thr an error, because constant cannot change.
 