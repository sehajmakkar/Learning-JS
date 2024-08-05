const month = 3;

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break; // agar break nahi lagaya toh aage ke saare code execue krdeta hai except default case;
    case 3:
        console.log("mar");
        break;

    default: //like else
        console.log("invalid");
        
        break;
}