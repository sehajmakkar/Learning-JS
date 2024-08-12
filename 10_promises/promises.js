// create promises
// takes callback as param
const promiseOne = new Promise(function(resolve, reject) {
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

// consume promise
// works withh resolve()
promiseOne.then(function(){ // connection with resolve
    console.log("promise consumed");
}) 

// another way to create and consume a promise without storing it into a variable
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("async two resolved")
})

// data consumption
const promisethree = new Promise(function (resolve,  reject) {
    setTimeout(function(){
        resolve({username: "chai", email:"sehaj@example.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
})

// reject keyboard
const promisefour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "chai", email:"sehaj@example.com"})
        }
        else{
            reject("Error, something went wrong") // yeh error deta hai reject
        }
    }, 1000);
})

// chaining example  -> catch
promisefour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => { // this is like the default case that logs after the end of the promise always
    console.log("The promise is either resolved or rejected");
})


const promisefive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "JS", email:"c++@example.com"})
        }
        else{
            reject("Error, JS went wrong") // yeh error deta hai reject
        }
    }, 1000);
})

// there are various ways to handle promises like async await
// the basic is using then, catch, finally.., it is not necessary to use them..

// problem of async await is it cant handle errors directly
async function consumePromiseFive() {
    try{
        const response = await promisefive 
        console.log(response);
    } catch (error){
        console.log("error");
    }
}
consumePromiseFive()
// used try catch to handle error gracefully in async await
// without try catch the code will throw error as we have used reject keyword in promise five

// fetch
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // data jo aayega response mein vo string mein ayega so converting it to use as objects
        const data = await response.json() // await karwana padega kyuki response aane mein bhi time lagega
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAllUsers()

// same function for then, catch, finlly
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then(() => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
    
})