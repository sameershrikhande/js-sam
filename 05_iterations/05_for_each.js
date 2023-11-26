// FOR EACH

// const myArray = [1, 6, 5, 8, 10]
// myArray.forEach()

const coding = ["js", "python", "java", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
} )