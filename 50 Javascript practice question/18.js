//condition

// let numberArray=[1,2,3,4,5,6,7,8,9,10]
// let evenNumber = numberArray.filter(numberArray => numberArray%2===0);
// console.log(evenNumber);



//Filter based on property

// const people = [
//     {name: 'Samiul', age: 25},
//     {name: 'Rahul', age: 20},
//     {name: 'Anish', age: 18},
//     {name: 'Pritvi', age: 23}
// ]

// const adults = people.filter(person => person.age > 21);
// console.log(adults);


//conplex condition

// const items = [
//     { name: 'Apple', category: 'Fruit', price: 1 },
//     { name: 'Carrot', category: 'Vegetable', price: 0.5 },
//     { name: 'Banana', category: 'Fruit', price: 1.2 }
//   ];

//   const expensiveFuits = items.filter(item=> item.category === 'Fruit' && item.price > 1)

//   console.log(expensiveFuits);

//using index and array in filter

// const numbers = [1,2,3,4,5,6]

// const oddIndexElement = numbers.filter((number,index)=> index % 2!==0)

// console.log(oddIndexElement);

//Filtering duplicate elements

const numbers = [4, 1, 2, 3, 4, 5, 4, 1, 6, 9, 1, 2]
const uniqueNumber = numbers.filter((number, index, array) => array.indexOf(number) === index);
console.log(uniqueNumber);