let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // date is an object

// to declare a specific date
let createdDate = new Date(2023, 0, 23, 5 , 3) //months start from zero in JS
console.log(createdDate.toLocaleString());

let specificdate = new Date("2023-01-14")
console.log(specificdate.toLocaleString());

let specificdate2 = new Date("01-14-2023")
console.log(specificdate2.toLocaleString());

let myTimeStamp = Date.now() // gives millisec value
console.log(myTimeStamp);
console.log(specificdate2.getTime()); // convert  date into time -> used when you want to compare times etc -> compare times in ms (advised)
console.log(Math.floor(Date.now()/1000)); // conversion into seconds


let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth()+ 1); // as it starts from ZERO


// IMMPORTANT -> CUSTOMIZE
newDate.toLocaleString('default', {
    weekday: "long"
    
});






