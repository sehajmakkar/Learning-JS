let score = 49;
console.log(typeof(score));

let age = "34"
console.log(typeof(age));

// converting score into number 
let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// confusion arises here 
let num1 = "22ac" //here there is a string which consistss of number and string
let num2 = Number(num1); //converting string into a number 
console.log(typeof(num2)); // returns type as NUMBER -> How tf a string containing 'ac' is a type of  number ?????????
console.log(num2); // and now if we print the output it returns NaN -> Not a Number -> WTF
// -> NaN is also a special type which you can check

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



