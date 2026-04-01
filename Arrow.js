const user = {
    usesrname : "anshul",
    price: 999,

    welconmeMessage: function () {
        console.log(`${this.usesrname} , wellcome to the world of JS , price of this course is ${this.price} `);
        console.log(this);
    }
}
// user.welconmeMessage();
// console.log(this);

// function one () {
//     console.log(this);
// }
// one();

// const filse = function () {
//     let username = "anshul";
    // console.log(this.username);
// }
// filse();

// const arrow = () => {
//     let username ="Baria"
//     console.log(this.username);
// }
// arrow();

// const addTwo = (a,b)=> {
//     return a+b;
// }
// console.log(addTwo(2,3));

const addone = (a,b)=> (a+b)
// console.log(addone(2,3))

// Add an odject with a method that uses an arrew function  

const filse01 = (num1, num2) =>( {username: "anshul",})
// console.log(filse01(2,3))
