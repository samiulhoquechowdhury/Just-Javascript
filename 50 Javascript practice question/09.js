//create an object representing a car with properties like mkae , model, and year.Add a method to the car object to start the engine

let car = {
    make:"toyota",
    model:"Camry",
    year:2022
}
car.startEngine = function(){
    console.log("Engine started")
}
car.startEngine();