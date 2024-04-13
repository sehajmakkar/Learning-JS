// immediately invoked function expressions (IIFE)
// what is IIFE? -> jo fn immediately invoke hojaye
// Use Case: global scope ke pollution se problem hoti hai kai baar toh jo global scope mein declarations hai  uske pollution  kko hatane ke liye we use IIFE

// Syntax: ()()
// first() -> function definition
// 2nd() -> execution call
(function chai() {
    // this is called "NAMED IIFE"
console.log("DB CONNECTED!");
})();
// ****IIFE invoke toh hojaate hai but usko yeh nahi pta ki context rukega kaha, toh we need to put a semicolon at the end of it
// so for next piece of code to run IIFE must be stopped so remember toput a semicolon!!


// IIFE with arrow fn
( (name) => {
    // UNNAMED IIFE
    console.log(`DB CONNECTED AGAIN ${name}`);
}) ("sehaj");
