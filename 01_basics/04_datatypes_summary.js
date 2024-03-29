// Primitive datatypes
// yeh call by value hote hai
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Symbol
// dekhne mein lag rhaa  hai inki value same hai but inki value same nahi hogi -> yahi symbol ka kaam hai 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //returns false

// BigInt -> last mein n lagado bigint mein store karne ke liye
const bigNumber = 54545641889179681664856418n

// Reference-type datatypes [Non-Primitive]
// yeh call by reference
// Array, Objects, Functions

// ARRAYS
const heros = ["shaktiman", "naagraj", "doga"]

// OBJECT -> inside curlyyy
let myObj = {
    name: "sehaj",
    age: 18,
}

// function
const myFn = function(){
    console.log("HELLO WORLD!");
}

// use typeof ____ function to find the datatype of any variable
// typeof all non-primitive datatypes is OBJECT
// type of  Funtion -> Object function

// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.
// you dont need to speify the type of data while declaring -> you just declare with let,const


// **** FINAL SUMMMARY ****
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object




// ********* STACK AND HEAP MEMORY ALLOCATIONS **********


// Primitive -> Stack
// Non-primitive -> Heap 

// stack -> copy pass
let ytName = "Kryptonite" //yeh jayega stack mein
let anotherName = ytName
anotherName = "Sehaj"

console.log(ytName);
console.log(anotherName);

// heap -> reference pass
let user1 = {
    email: "hey@gmail.com",
    upi: "4654651@paytm"
}
let user2 = user1

user2.email = "wassup@google.com"

console.log(user1.email);
console.log(user2.email);
// dono ka same result ayega kyuki HEAP mein reference pass hota hai.
// this means jo bhi aap changes karte hai vo aa original cheezo mein karte hai !!