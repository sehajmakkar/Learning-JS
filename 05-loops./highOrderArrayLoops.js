// for of loop

const arr = [1,2,3,4,5]
// js ka object nahi hai yeh
// jiske andar loop chalana hai vo hai
for (const num of arr) {
    console.log(num)
}

const greetings = "namaste"
for (const greet of greetings) {
    console.log(greet);
}

// MAPS -> unique values and in same order as input
const map = new Map()
map.set('IN', "India")
map.set('US', "USA")
map.set('FR', "France")
map.set('IN', "India")
console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}


// objects
const myObj1 = {
    'game1': 'Valo',
    'game2': 'CS2'
}
//gives error as object is not iterable
// for (const obj of myObj1) {
//     console.log(obj);
// }


// for in LOOP
// objects
const myObject = {
    js : 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swiftbyapp'
}
for (const key in myObject) {
    console.log(key);
}
for (const key in myObject) {
    console.log(myObject[key]);
}
// forin array
const lang =["js", "cpp", "java"]
for (const key in lang) {
    console.log(key); // indices 
}
for (const key in lang) {
    console.log(lang[key]);
}
// map is not iterable, by forin loop

// for each loop (best usage)

const languages =["js", "cpp", "java"]
// callback function
// languages.forEach( function (item) {
//     console.log(item)
// } )

// can also pass arrow function as callback function
// languages.forEach( (item) => {
//     console.log(item);
// } )

// function printme(item){
//     console.log(item);
// }
// languages.forEach(printme);

languages.forEach( (item, index, arr) => {
    console.log(item,index,arr)
} )

// array of objects [impt] [used in DB]
const myCoding = [
    {
        langname: "javascript",
        langfile: "js"
    },
    {
        langname: "java",
        langfile: "java"
    },
    {
        langname: "c++",
        langfile: "cpp"
    }
]
myCoding.forEach((item) => {
    console.log(item.langfile);
})