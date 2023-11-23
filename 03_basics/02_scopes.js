// var c = 20
a = 105
if (true) {
    let a = 10
    // console.log("Inner:", a);
    // const b = 10
    // var c = 10          // dont use
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "sam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "sam"
    if (username === "sam") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// ********************************* intresting *********************************
console.log(addOne(5));
function addOne(num){
    return num + 1
}

// addOne(5)

// const addTwo = fucntion(num){
//     return num + 1
// }


console.log(addTwo(5));
const addTwo = function(num){
    return num + 1
}

// addTwo(5)