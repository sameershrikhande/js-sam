// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1231ab"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fulladdr: {
        streetaddr: {
            line1: "line 1 Addr",
            line2: "line 1 Addr"
        }
    }
}

// console.log(regularUser.fulladdr?.streetaddr.line1);        // optional chaining

const obj1  = {1: "a",2: "b"}
const obj2  = {3: "c",4: "d"}
const obj4  = {5: "c",6: "d"}

// const obj3 = { obj1, obj2}
// console.log(obj3);
// console.log(typeof obj3);

// const obj3 = Object.assign(obj1, obj2, obj4)                 // parameters (target, source, sources....) 
// console.log(obj1);                                           // assigns values of sources to target
const obj5 = Object.assign({}, obj1, obj2, obj4)             // {} uses a new object to transfer values - production grade
// console.log(obj3);
// console.log(obj5);

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);
// console.log(typeof obj3);

users = [
    {
        id: 1,
        name: "sam"
    },
    {
        id: 2,
        name: "sam"
    },
    {
        id: 3,
        name: "sam"
    },
    {
        id: 4,
        name: "sam"
    }
]
// console.log(users[2].id)
                                                    // Useful when using database
// console.log(Object.keys(tinderUser));               // gives values in array 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('nameas'));




// ****** ****** ****** Object Destructure ****** ****** ****** 


const course = {
    courseName : "Js Hindi",
    coursePrice : 987,
    courseInstructor: "Sir Hitesh"
}
// console.log(course.courseInstructor);
// const {courseNamem, coursePrice, courseInstructor} = course

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);



// API: Json

//  {
//     "name" : "sam",
//     "coursename": "js hindi",
//     "price" : "free"
//  }


 [
    {},
    {},
    {},
    {}
 ]