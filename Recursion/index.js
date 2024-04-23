function samiul(){
    return rahul();
}

function rahul(){
    return anish();
}

function anish(){
    return true;
}

console.log(samiul());

function recursiveFunc(){
    console.log("called");
    recursiveFunc();
}
recursiveFunc()
