// -> dont use var

// scope {}

// global and local scope
let a = 300
if(1){
    let a = 10
    const b = 20
    // console.log("inside block:",a); //10
}

// console.log("Outside block:",a); //300
// console.log(b);

// web browser and node ke andar global scope alag hota hai


// NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
// NESTING SCOPE (functions)

function one(){
    const username = "Sehaj"

    function two(){
        // andar waala bahar ke variable access kar sakta hai
        const website = "yt"
        console.log(username);
    }
    // but bada function nahi kar sakta andar ka variable use 
    // console.log(website);

    two()
}
 one()



// ***************** interesting ***************

// HOISTING AAGE SAMAJH AYEGA !!

// Types of declaring a function
// in type 1 you can call a fn before declaring it
// but in type 2 you can't

// TYPE1
addone(5) //  KAR SAKTE HHAI
function addone(num){
    return num+1
}
addone(5)

// TYPE2 ISKO FUNCTION KE SAATH SAATH EXPRESSION BHI KEHTE HAI
// addtwo(5) ERROR!!
const addtwo = function(num){
    return num+2
}
addtwo(5)
