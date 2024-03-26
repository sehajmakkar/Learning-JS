// objects and events sikhlo -> JS done!

// ways to declare object - like a literal or ctor
// jab bhi literal ki trah declare karte haii toh singelton nahi banta, ctor ke case mein agar object banega toh humesha singelton banega 

// Impt foor interview: how to declare and print symbol as a key value
const mySym = Symbol("key1") // declaring

// object literal
// declaring object ->
const JsUser = {
    name: "Sehaj", // key: value
    "full name": "Sehaj Makkar",
    age: 19,
    location: "Delhi",
    email: "sehaj@codenation.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Fri"],
    // mySym: "mykey1" // cant do like this -> datatype mmySym ka string hi rahega aise use karenge toh
    [mySym]: "mykey1"
}

// Accessing objects
console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser[email]); // error dega as string ki tarah dena chahiye "email" ko


// console.log(JsUser."full name"); // throws error as wecan only access this with below method
console.log(JsUser["full name"])

// only way to access a symbol
console.log(JsUser[mySym]);
console.log(typeof mySym);

// changing
JsUser.email = "sehaj@openAI.gpt"
// Object.freeze(JsUser) // freeze kardiya object ko matlab ab iske baad koi bhi change maana nahi jayega 
JsUser.email = "sehaj@media.net"
// console.log(JsUser);


// functions in object
JsUser.greeting = function(){
    console.log("HELLO WASSUP!");
}

JsUser.greeting2 = function(){
    console.log(`HELLO WASSUP!, ${this.name}`);
}

console.log(JsUser.greeting); // returns [Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greeting2());