// singleton    
// Object.create


// object literals

const mySym = Symbol("key2")

const JsUser = {
    name: "Sam",
    "full name": "Sam Shri",
    "ClgYear": "BE IT",
    [mySym]: "mykey2",
    age: 21,
    college: "Mu",
    isLoggedin: false
}

// console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser.ClgYear);
// console.log(JsUser["ClgYear"]);

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);          // Check Online, type supp Symbol, but its string



JsUser.name = "Sameer"
// Object.freeze(JsUser)
JsUser.name = "Shrikhande"
// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello User!");
}
JsUser.greetingsTwo = function() {
    console.log(`Hello User, ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());