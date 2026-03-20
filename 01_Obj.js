// Singleton Object

const MySym = Symbol('MySym');
// Object literal
const JsUser = {
    // "fullName": 'Anshul Baria',
    name: 'Anshul Baria',
    age: 30,
    [MySym]: 'MySymValue',
    email: 'anshu@example.com',
    isloggedIn: true,
    lastLoginDays: ['Monday', 'Tuesday', 'Wednesday'],
    greeting: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    greetingTwo: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
console.log(JsUser.greetingTwo());


// console.log(JsUser.name);
// console.log(JsUser.isloggedIn);
// console.log(JsUser.lastLoginDays);
// console.log(JsUser["fullName"]);


// console.log(JsUser["email"]);
// console.log(JsUser[MySym]);
// console.log(typeof JsUser[MySym]);
// console.log(JsUser.email);
Object.freeze(JsUser) // freeze the obj to prevent modification

JsUser.email = "newemail@example.com"
// console.log(JsUser.email);

JsUser.greeting = function() {
    console.log(`Hello, my name is ${this.name}`);
}


// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
