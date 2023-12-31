// https://262.ecma-international.org/5.1/#sec-11.4.3

// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non Primitive)
// Array, Objects, Functions

const score = 150
const scoreVale = 150.230

const isLoggeIn = false
const outsideTemp = null
let userEmaill;

// console.log(userEmaill);

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
// console.log(typeof anotherId);

const bigNumber = 8127912439898098293892834928n
// console.log(typeof bigNumber);
// console.log(bigNumber);


const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "sam",
    age: 22,
}

const myFunction = function(){
    // console.log("HelloWOrld");
}

console.log(typeof outsideTemp);
// console.log(typeof userEmaill);


// null => undefined
// undefined => undefined
// object => object

// Array => object
// oject => object
// function => funtion object / object function


// *****************************************

// Memory- Stack (Primitive)   Heap (Non Primitive)

let name = "sam"
let othername = "shri"

let userOne = {
    email: "sam@gmail.com",
    upi: "sam@axisb"
} 

let userTwo = userOne

userTwo.email = "sam@google.com"

console.log(userOne.email);
console.log(userTwo.email);
