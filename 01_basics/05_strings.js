const name = "sehaj"
const count = 500;

// concatenate 
// console.log(name + count + "hey"); // bekar syntax

// GOOD PRACTICE :
// use backticks `___` -> string interpolation
// use ${variable_name} for referring variables
console.log(`My name is ${name} and my count is ${count}`);

// declaring string (heap memory)
const gameName = new String("Krypt-onite")

console.log(gameName[0]);
console.log(gameName.__proto__);

// ******* string functions ********

console.log(gameName.length);
console.log(gameName.toUpperCase()); // original value change nahi hoti hai
console.log(gameName.charAt(5)); // char at index
console.log(gameName.indexOf('t'));

// -ve values not valid
const newStr = gameName.substring(0,4)
console.log(newStr);

// -ve values are valid
const anotherStr = gameName.slice(2,6)
console.log(anotherStr);

const newString1 = "     sehaj     "
console.log(newString1)
console.log(newString1.trim()) // eliminates whitespaces and newline

const url = "https://sehaj.com/sehaj%18makkar"
console.log(url.replace('%18', '-')); //find and replace

console.log((url.includes("sehaj")))

console.log(gameName.split('-')); // input separator





