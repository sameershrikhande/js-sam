const promiseOne = new Promise(function(resolve, reject){
    // Do async task
    // DB calls.. cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log("Resolved");
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async Task 2");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@eg.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "sameer", password: "123456"})
        }else {
            reject('Error: Something went wrong')
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(() => console.log("the promise is either resolved or rejected"))

// console.log(username);


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            console.log("!error : if");
            resolve({username: "javascript", password: "123456"})
            console.log("!error : if");
        }else {
            console.log("!error : else");
            reject('Error: JS went wrong')
            console.log("!error : else");
        }
    }, 1000);
})


// async function consumedPromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }

async function consumedPromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error); // Log the specific error message here
    }
}
consumedPromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()


fetch('https://api.github.com/users/sameershrikhande')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
