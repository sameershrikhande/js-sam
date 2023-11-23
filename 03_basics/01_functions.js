function sayMyName(){
    console.log("S");
    console.log("a");
    console.log("m");
    console.log("e");
    console.log("e");
    console.log("r");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(5, "6")  // addTwoNumbers(5, "a") // addTwoNumbers(5, null)

// const result = addTwoNumbers(5, 6)               // gives UNDEFINED : no use of return
// console.log(result);

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(5, 6)
// console.log(`Result: ${result}`);


function loginUserMessage(username= "sam"){            // default value
    // if(username === undefined){
    //     console.log("Please enter a username...");
    //     return
    // }
    if(!username){
        console.log("Please enter a username...");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sameer"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage("Sameer"))

// function calculateCartPrice(...num1){                       // rest operator,           rest and spread are same, just diff based on the usecase
function calculateCartPrice(val1, val2, ...num1){                       // rest operator,           rest and spread are same, just diff based on the usecase
    return num1
}
// console.log(calculateCartPrice(2, 4, 6, 8));


const user = {
    username: "Sameer",
    price: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Sam",
//     price: 299
// })

const myNewArray = [200, 300, 500, 654, 499]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 654, 499]));