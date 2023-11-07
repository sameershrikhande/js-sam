const name = "sam"
const repoCount = 10

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sameer-sh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('m'));

console.log(gameName);
// console.log(typeof gameName);
const newString = gameName.substring(2, 5)
// console.log(newString)
const newString1 = gameName.substring(-2, 5)
// console.log(newString1)

const anotherString = gameName.slice(2, 5)
// console.log(anotherString)

const annString = gameName.slice(-5, 8)
// console.log(annString);

const newStringOne = "     sam     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sameer.com/sameer%shri"
console.log(url.replace('%20', '-'))

console.log(url.includes('samji'))

console.log(gameName.split('-'));

console.log(`Hello, the gameName is ${gameName.split('-')}`);