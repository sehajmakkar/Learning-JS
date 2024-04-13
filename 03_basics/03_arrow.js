// this keyword -> used to refer the object in the CURRENT(LAST UPDATED) CONTEXT

const user = {
    username: "sehaj",
    price: 990,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this); // tells about which context it is using [in this case the object 'user']
    }

}

// user.welcomeMessage()
// user.username = "sam" // CONTEXT CHANGED
// user.welcomeMessage()

// console.log(this); 
// abhi koi global mein conext  nahi hai islie it prints emppty '{}'
// above is cuz we are running this in nodejs environment but if we do in browser then gllobal context object is 'Window' ****IMPTTT


// using THIS keyword in a funtion
// function chai(){
//     let username = "sehaj"
//     console.log(this.username); // undefined as we are not in an referring to an object
// }
// chai()



// THIS IN ARROW FUNCTION
// const chai = () => {
//     let username = "sehaj"
//     console.log(this);
// }
// chai()


// arrow function core
// curly braces use hue toh return keyword likhna padega arrow function mein!
// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// implicit arrow return [without curly braces]
// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2) // same thing as above, we just put parenthesis

// to use object in arrow fn -> remember to use parentheses around curly braces on the object
const addTwo = (num1,num2) => {username: "sehaj"}
console.log(addTwo(1,2));