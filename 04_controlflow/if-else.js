// if
// condition must be true to go into scope.
// if (condition){
    // logic
// } 
// else{
// }

// impt scope related
// const score = 200;
// if(score > 100){
//     // scope of power in only defined inside if block.
//     const power = "fly";
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// shorthand notation for if statement.
const balance = 1000
if (balance > 500) 
    console.log("test");

// multiple if-else statements -> else if 
if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
}else{
    console.log("less than 1200")
}


// multiple conditions
const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInfromEmail= true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy!")
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log("Allow to buy!")
}

    




const isUserloggedIn = true;
if(isUserloggedIn){
    
}