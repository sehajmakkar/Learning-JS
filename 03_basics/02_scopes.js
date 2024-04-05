// -> dont use var

// scope {}

// global and local scope
let a = 300
if(1){
    let a = 10
    const b = 20
    console.log("inside block:",a); //10
}

console.log("Outside block:",a); //300
// console.log(b);

// web browser and node ke andar global scope alag hota hai







