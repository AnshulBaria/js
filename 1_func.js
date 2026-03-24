
function SayHello (){
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("u");
    console.log("l");    
}
// SayHello();
function AddTwoNum(num1,num2)
{
    console.log(num1+num2);
}

// AddTwoNum(10,9);
// AddTwoNum(10,"9");
// AddTwoNum(10,"a");

// const result = AddTwoNum(10,9);
// console.log(result); // undefined

function loginUser(username="sam"){
    if(!username)
{
        console.log("Please enter username");
        return
    }
    return `${username} just entered username`;
    
}
// console.log(loginUser("anshul"));

function calculateBill(...num1){
return num1;
}
console.log(calculateBill(200,300,400));
