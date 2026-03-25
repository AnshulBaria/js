let a =10 
const b = 20
var c =600

if (true){
    let a = 100
    const b = 200
    var c = 300 
    console.log("inside block ",a); // this will print 100 because of block scope 
}
console.log(a); // not accessible because of block scope it will print global a which is 10
// console.log(b); not accessible because of block scope it will print global b which is 20 
// console.log(c); this will print 300 because var is function scoped and not block scoped



