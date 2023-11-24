// for of

// ["", "" , ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
//     console.log(num);
}

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     if (greet == " ") {
//         continue
//     }
//     console.log(`Each char is ${greet}`);
// }


// Maps

const map1 = new Map()
map1.set('IN', "India")
map1.set('US', "United States of America")
map1.set('FR', "France")
map1.set('IN', "India")

// console.log(map1);
// console.log(map1.get('IN'));

// console.log(map1.size);
// map1.delete('US')

// console.log(map1);
// console.log(map1.get('US'));

for (const [key, value] of map1) {
    console.log(`${key}, ${value}`);
}

const myObject = {
    "game1": "GTA",
    "game2": "NFS"
}

//  FOR OF doesn't work on objects

// for (const [key, value] of myObject) {
//     console.log(`${key}, ${value}`);
// }

