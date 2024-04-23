function foo() {
    var x; // Declaration is hoisted
    console.log(x); // At this point, x is undefined
    x = 10; // Assignment remains in place
}
foo()