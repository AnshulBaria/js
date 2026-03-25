let a = 10
const b = 20
var c = 600

if (true) {
    let a = 100
    const b = 200
    var c = 300
    console.log("inside block ", a); // this will print 100 because of block scope 
}
// console.log(a); // not accessible because of block scope it will print global a which is 10
// console.log(b); not accessible because of block scope it will print global b which is 20 
// console.log(c); this will print 300 because var is function scoped and not block scoped

function one() {
    const userName = "anshul"
    function two() {
        const rollNumder = 123
        // console.log(userName);

    }
    // console.log(rollNumder);

    two()
}
one()


if (true) {
    const userName = "anshul"
    if (userName === "anshul") {
        const rollNumder = 123
        // console.log(userName +  rollNumder);
    }
    // console.log(rollNumder);
}
// console.log(userName);

// ======================= //
console.log(addone(3));
function addone (value) {
    return value + 1
}

// console.log(addTwo(3)); due to hoisting this will throw an error because addTwo is a function expression and not a function declaration
const addTwo = function(value) {
    return value + 2
}
