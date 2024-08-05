const userMail = "sehaj.ai";

if(userMail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

/*
falsy Values:
    false
    0 / -0
    BigInt [0n]
    ""
    null
    undefined
    NaN

Truthy Values:
    all values except falsy values.
    "0"
    'false'
    " " [space in a string]
    []
    {}
    function(){} [empty function]
*/