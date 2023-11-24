// FOR IN

const myObject = {
    js: 'javascript',
    cpp: "C++",
    py: "Python",
    rb: "ruby"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = [  "js", "cpp", "py", "rb"]

for (const key in programming) {
    // console.log(programming[key]);
}


// const map1 = new Map()
// map1.set('IN', "India")
// map1.set('US', "United States of America")
// map1.set('FR', "France")
// map1.set('IN', "India")


// // Map isn't iteratable
// for (const key in map1) {
//     console.log(key);
// }