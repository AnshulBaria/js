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
    
};
// console.log(JsUser.name);
// console.log(JsUser.isloggedIn);
// console.log(JsUser.lastLoginDays);

// console.log(JsUser["email"]);
// console.log(JsUser[MySym]);
// console.log(typeof JsUser[MySym]);

Object.freeze(JsUser) 
JsUser.email = "newemail@example.com"
// console.log(JsUser.email);

console.log(JsUser.email);
