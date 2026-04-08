const userEmail = "a@anshul.com"
// if (userEmail)
if (userEmail) {
    console.log("got user email");

} else {
    console.log("user email not found");
}

// falsy values in js
// false
// 0
// -0
// BigInt(0n)
// ""
// null
// undefined
// NaN

// truthy values in js
// "0"
// " "
// "false"
// []
// {}
// function(){}
// true
// 1
// -1
// BigInt(1n)

// nullish coalescing operator (??) null , undefined
// const userEmail = null
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// console.log(val1);

// val1 = null ?? 10 ?? 5
// console.log(val1);

// ternary operator
// Condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("I will buy ice tea") : console.log("I will not buy ice tea");