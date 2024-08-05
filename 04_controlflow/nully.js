// nullish coalescing operator (??): null undefined
// null safety check
// null hai toh null dedo nahi toh dusri value
let val1;
// val1 = 5 ?? 10 // 5

// val1 = null ?? 10; // 5

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // jo pehle defined hai vo print.
console.log(val1);

// ternary operator : syntax of if else in short
// condition ? true : false

const price = 90
price <= 10 ? console.log("less than 10") : console.log("more than 10");


