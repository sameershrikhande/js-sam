const userEmail = "sam@s.ai"

if (userEmail) {
    console.log("got user email");
} else {
    console.log("Don't have user email");
}


// falsy avlues
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
//  "0", 'false', " ", {}, [], function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 4 ?? 9
// val1 = null ?? 9
// val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 100

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 200
iceTeaPrice <= 100 ? console.log("Less than 100") : console.log("More than 100");