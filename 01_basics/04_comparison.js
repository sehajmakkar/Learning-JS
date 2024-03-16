// ******** COMPARISONS ******
//  <, >, <=, >=, ==, !=
// this is simple conversions with same datatypes


// but confusion arises here when you compare different datatypes

// automatically JS converts this "2" into 2
console.log("2" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// the reason here is == and < > <= >= work differently
// comparisons convert null into a number that is a ZERO
// thats why 1st one is false and 3rd is true

// undefined mein sabme false aayega

// ===
// isme yeh datatype conversion nahi karta
console.log("3" === 3); //false as it also checks the datatype of your input