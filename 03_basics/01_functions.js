// function syntax
function myName(){
    console.log("SEHAJ");
}
// reference of the function
// myName()



// passed in function -> parameters
function add(num1, num2){
    console.log(num1 + num2);
}
// passed while calling a function -> arguments
const ans = add(1,5) // returns 8
console.log(ans); // returns undefined


function addAgain(num1, num2){
    let result = num1 + num2;
    return result;

    // OR return num1+num2; (instead of above 2 lines)

    // everything you write after return statement will not be executed
}
const res = addAgain(5,6)
console.log("SUM =",res); // returns 11



function loginUserMsg(username/* username = "sehaj"*/){
    if(username === undefined /* OR !username */){
        console.log("plz enter username");
        return // ab iske niche waala nahi chalega agar  if mein enter hogye toh
    }
    return `${username} just logged in`
}

const name = loginUserMsg()
console.log(name);
// agar kuch bhi pass nahi karoge toh undefined aajayega 

// if you want to avoid empty string being passed just initialize the parameters with some string -> fir bare minimum vo string toh jayegi hi agar koi string nahi gayi !! example above
// aur agar koi value pass kardi aapne as an argument toh initialized value overwrite hojayegi


// **************** NEW *************

// Shopping cart logic -> without knowing number of items input by user -> you need to return the total price of the cart

// REST OR SPREAD OPERATOR (...varName)
function calcCartPrice(val1,val2,...num1){
    return num1
}
console.log(calcCartPrice(200,300,100,500,800)); // returns an array of all the inputs given
// val1 -> 200, val2 -> 300, and rest returns as an array!



// OBJECT and function
const user = {
    username: "sehaj",
    age: 18
}
function handleObject(anyobject){
    console.log(`Username id ${anyobject.username} and age is ${anyobject.age}`);
}
handleObject(user);

// direct bhi pass kar sakte ho bina alag se object banaye
handleObject({
    username: "sam",
    age: 34
})


const arr = [100,2200,300,500,411]
function returnSecValue(getArr){
    return getArr[1] // yaha pe initialized (arr) mat use karna vo argument ayi hai vo use karna
}
console.log(returnSecValue(arr));
// direct bhi pass kkar sakte hai
console.log(returnSecValue([100,2200,300,500,411]));
