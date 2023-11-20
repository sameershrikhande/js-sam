// array

const myArr = [0, 1, 2, 3, 4, 5, 6, true, false, "sam"]

// console.log(myArr);
// console.log(myArr[1]);

//  Array Methods

// myArr.push(8)
// myArr.push("asdca")
// myArr.pop()

// myArr.unshift(1231240) 
// myArr.shift()

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(129));
// console.log(myArr.indexOf(2));

const newArr = myArr.join()         // converts array objects to string

// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);



// slice, spice
//      spice manupulates original array, 1-4 includes all,


// console.log("A", myArr);

const myn1 = myArr.slice(1, 4)
// console.log(myn1);

// console.log("B", myArr);

const myn2 = myArr.splice(1, 4)
// console.log(myn2);
// console.log("C", myArr);


const myArr1 = ['apple', 'banana', 'orange'];
const newArr1 = myArr1.join(' - '); // Joins elements using ' - ' as the separator
console.log(newArr1); // Output: "apple - banana - orange"
console.log(typeof newArr1); // Output: "apple - banana - orange"
