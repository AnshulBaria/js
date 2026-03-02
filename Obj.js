const mySym = Symbol("myValue");

const MyUser = {
    name:"Anshul",
    Age:24,
    RollNo:701,
    Emails:"anshul@gmails.com",
    [mySym]:"myValue"
}
console.log(MyUser);
console.log(MyUser.Emails)
console.log(MyUser[mySym])
// console.log(typeof mySym)


MyUser.Emails="anshubarai@gmail.com"
console.log(MyUser.Emails)
Object.freeze(MyUser)

MyUser.greetings = function(){
    console.log("Hello there!");
}
console.log(MyUser.greetings());