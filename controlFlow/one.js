// // if condition 
// const temp = 30;

// if (temp < 50){
//     console.log("temperature is less than 50");
    
// }
// else{
// console.log("temperature is greater than 50");
// }

// const score =200
// if  (score >100){
//     const power = "fly";
//     console.log("you are a pro player");
     
// }
// console.log(`user power is ${power}`); // scope error because power is defined in if block and we are trying to access it outside the block
// SHORT HAND IF
const balance =100;
// if (balance > 500) console.log("testing short hand if"),console.log("test2");

// if (balance <500){
//     console.log("less than 500");

// }else if (balance > 500 && balance < 1000){
//     console.log("between 500 and 1000");
// }
// else{
//     console.log("greater than 1000");
// }

const userloggedIn = true;
const debitCard = true;
const LoggedInWithGoogle = false;
const loggedINwithEmail = true;
// if (userloggedIn&& debitCard){
//     console.log("Allow usetr to make payment");
// }
if (loggedINwithEmail || LoggedInWithGoogle){
    console.log("user logged in with email or google");
}