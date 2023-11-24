// if

// const ifUserLoggedIn = true
// const temp = 60

// if ( temp < 50 ) {
//     console.log("Temp less than 50");
// }
// else {
//     console.log("Temp greater than 50");
// }
// console.log(`Its: ${temp} C`);
// <, >, <=, >=, ==, !=, ===


// const score = 400

// if (score > 200) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

// const balance = 1000

// // if (balance > 1000) console.log("test1");                            // NEVER
// // if (balance > 1000) console.log("test1"), console.log("test2");      // NEVER

// if (balance < 1000) {
//     console.log("Balance less than 1000");
// } else if (balance > 1000) {
//     console.log("Balance greater than 1000");
// } else {
//     console.log("Balance is 1000");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFormGoogle = false
const loggedInFromEmail = true
const guestUser = true

if (userLoggedIn && debitCard && 2==21) {
    console.log("Allow to purchase");
}
if (loggedInFormGoogle || loggedInFromEmail || guestUser) {
    console.log("User LoggedIn");
}