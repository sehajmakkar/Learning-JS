const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); // conversion into string-> conversion into string enables a number to have all the properties of string which makes it more useful
console.log(balance.toFixed(2)); // to limit the precision value (decimal ke baad kitni value honi chaiye)

const othernum = 23.4563
console.log(othernum.toPrecision(3)); // input number -> kitni digits pe precision dena hai (from left to right) -> ex: in this it returns 23.5
// returns string

const num1 = 1000000
console.log(num1.toLocaleString('en-IN')); //commas

// min and max value in JS 

// ******************** MATH *******************
// console.log(Math);
// console.log(Math.abs(-5)); // to make +ve 
// console.log(Math.round(4.38)); // round off simple 
// console.log(Math.ceil(4.1)); // top round off- returns 5
// console.log(Math.floor(4.9)); // bottom round off - returns 4

// most useful case of Math
console.log(Math.random()); // 0 <= x < 1
console.log(Math.random()*10); // 0 <= x < 10
console.log((Math.random()*10) + 1); // 1 <= x < 10
console.log(Math.floor(Math.random()*10) + 1); // 1 <= x < 9


// to get a random value between specified values
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min +1) ) + min);

/* Concept for above:
 the plus one is  added to include the maximum number(20) into the range .. Zero case is already handled by adding +min after it ...   For example  let's say the random returns 0.99999 then multiply it with 11(20-10+1)..  , we will get 10.989.... take the floor value of this which will be 10 and now add it with min value which is 10 so overall answer would be 20(the ending range). That's the maximum case..  
Similarly if random returns 0.0122... then everything will get 0 in the left and then adding min(10) to 0 will give us 10 which is the starting range..

*/

// used math.floor() for integer values not decimal



// ******************
/*A simple explanation that I always think about is "Math.random() sirf 0 se 1 tk random number generate krta hai 0 is inclusive, 1 is exclusive....So in this statement Math.random() * 10, the result can never be equal to 10 qki 10 lane k lie usko 1 se mulitply hona pdega jo ki possible nahi hai, to result hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi hoga, or iske upr se agar aap Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi bhi integer ho skta hai but 10 nahi, to 10 ko bhi range me include krne k lie hum usme 1 add kr dete hai.....that is if you do Math.floor(Math.random() * 11) to result [0,10] tk aaega both inclusive.....and at last isme bas aap 1 add kr doge to result [1,10] m convert ho jaega....

similarly, is concept ko max min m bhi leke jaa skte hai*/






