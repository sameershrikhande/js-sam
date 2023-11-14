// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(typeof myDate);
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate.toJSON());


// let myCreatedDate = new Date(2023, 0, 24, 3, 4)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date("2023-01-16")
let myCreatedDate = new Date("01-16-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));       // good

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default', {
    weekday: "long",
    // timeZonejj
})
console.log(newDate.toLocaleString());