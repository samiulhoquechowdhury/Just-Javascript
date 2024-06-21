//     __proto__

let a = {
    name:"samiul",
    language: "javascript"
}
console.log(a)

let p = {
    run: () => {
        alert("run");
    }
}

a.__proto__ = p
a.run()