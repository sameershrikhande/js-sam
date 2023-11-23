// use of 'this' inside an object

const user = {
    username: "sameer",
    price: 999,

    welcomeMessaage: function() {
        console.log(`${this.username}, welcome to our website`);
        console.log(this);
    }
}

// user.welcomeMessaage()
// user.username = "sam"
// user.welcomeMessaage()

// console.log(this);           of context: nodejs has none global object here, whereas in a browser, it has window as the global object


// use of 'this' inside a funtion - NOPE ...undefined...

// function chai(){
//     let username="sameer"
//     console.log(this.username); // no
// }
// chai()


// const chai = function () {
//     let username="sameer"
//     console.log(this.username);
// }

// const chai = () => {
//     let username="sameer"
//     console.log(this);
// }
// chai()


// Arrow Function
// basic : Explicit Return : requires return to be mention explicitly {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit Return : Dosent require return to be mention explicitly ()  // maan liya 
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "sameer"})
console.log(addTwo(2, 6))

// const myArray = [1, 6, 5, 8, 10]
// myArray.forEach()