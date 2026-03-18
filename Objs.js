// singleton
// obj literals
//Object.create
const MySym = Symbol("Key1")

const JsUser = {
    Name: "Anshul",
    "Full_Name":"Baria",
    [MySym]:  "MyKey!",
    Age: 18,
    loc: "Vadodara",
    email: "anshulbaria192@gmail.com",
    isloggedIN: false,
    lastLoginDays:["monday","saturday"]
}
// console.log(JsUser["email"]);
// console.log(JsUser.Full_Name);
// console.log(JsUser[MySym]); 
// console.log(typeof MySym);

JsUser.email = "ansh@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "anshbaria@gmail.com"
// console.log(JsUser["email"]);

JsUser.greeting = function() {
     console.log(`Hello JS User${this.Name}`);
}

JsUser.greetingTwo = function() {
     console.log(`Hello JS User ${this. Name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());

 
