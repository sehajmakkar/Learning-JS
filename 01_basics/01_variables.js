// declaring constant
// cant change throughout the program through const keyword
const accountId = 10022

// declaring variables
// good practice to use let 
// forget var as it has block scope and functional scope issues
let accountEmail = "sehajmakkar.github.io"
var password = "2211331"

// bina variable ke  memory reserve kr sakte ho aap JS mein
// but its not preferred 
// considered as bad practice
accountCity = "Panipat"

// agar aap variable declare krke chod doge toh JS usko UNDEFINED maanti hai 
let accountstate;

// accountId = 2 // not allowed
accountEmail = "heyhey"
password = "447755"
accountCity = "Delhi"

console.log(accountId);

// table for running all variables at once
console.table([accountEmail,accountId,accountCity,password,accountstate])