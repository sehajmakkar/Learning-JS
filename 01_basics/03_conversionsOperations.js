// ******** CONVERSIONS *********

// let score = 49;
// console.log(typeof(score));

// let age = "34"
// console.log(typeof(age));

// // converting score into number 
// let valueInNumber = Number(age)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// // confusion arises here 
// let num1 = "22ac" //here there is a string which consistss of number and string
// let num2 = Number(num1); //converting string into a number 
// console.log(typeof(num2)); // returns type as NUMBER -> How tf a string containing 'ac' is a type of  number ?????????
// console.log(num2); // and now if we print the output it returns NaN -> Not a Number -> WTF
// // -> NaN is also a special type which you can check

// Conversion into a Number
// "33" -> 33
// "33abs" -> NaN
// bool : true -> 1, false -> 0
// null -> 0
// undefined -> NaN

// Conversion into Boolean
// 1 -> true
// 0 -> false
// "" -> false (empty string)
// "content" -> true

// Browser generally provides value in String type..
// Conversion into String


// ******** OPERATIONS **********

let value = 3
let negValue = -value
console.log(negValue);


let str1 = "hello"
let str2 =  " sehaj"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2); // prints 122 -> WHY TF
console.log(1+2+"2"); //prints 32 -> ??

console.log(true); //  prints true
// yeh sab bakchodi nahi karni chahiye
console.log(+true); // prints 1
console.log(+""); // prints 0
let num1, num2,  num3
num1 = num2 = num3 = 2+2


let gameCounter = 100;
gameCounter++
console.log(gameCounter);


