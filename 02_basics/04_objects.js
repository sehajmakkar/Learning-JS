const tinderUser = new Object() // singelton object
// const tinderUser = {} // non singelton

tinderUser.id = "024rt8"
tinderUser.name = "Sam Altman"
tinderUser.isLogged = true

// console.log(tinderUser);

// object nesting
const regUser =  {
    email: "user@gmail.com",
    fullname: {
        userFullname: {
            firstname: "sehaj",
            lastname: "makkar"
        }
    }
}

console.log(regUser.fullname);
console.log(regUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


// const obj3 = {obj1, obj2} // aise object ke andar object ajayega 

// syntax mein {} yeh daalna zaruri nahi hai 
// {} yeh daalne se yeh hota hai ki saare mentioned sources(objects) empty object/list ({}) mein aajate hai, nahi toh fir vo 1st source/object mein aajayenge!
const obj3 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2)

// everyone uses this spread operator '...object'
const obj5 = {...obj1, ...obj2}
console.log(obj3);
console.log(obj4);
console.log(obj5);

// database se zyadatar array of objects aati hai
const users = [
    {
        id: 1,
        email: "dci@kmdc"
    },
    {
        id: 1,
        email: "dci@kmdc"
    },
    {
        id: 1,
        email: "dci@kmdc"
    }
]
// can use elements like this ->
users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // returns all keys as an ARRAY {IMPT}
console.log(Object.values(tinderUser)); // returns all values as an ARRAY {IMPT}
console.log(Object.entries(tinderUser)); // returns all keys:value as an ARRAY {IMPT}

// CHECK if if it has a property or not
console.log(tinderUser.hasOwnProperty('isLogged'));


// ******** NEW *********

// destructuring an object
const course = {
    courseName: "js in hin",
    price: 99,
    courseInstructor: "hitesh chaudhary"
}

const {courseInstructor: instructor} = course
console.log(instructor);

// API
// JSON (it is a format of an API)
// it is like an object but not an object (keys and values both must be string in JSON)
// API mein objects,array and both mil sakte hai toh you need to handle acc to their nature

// {
//     "name": "sehaj",
//     "course": "js in hin",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

