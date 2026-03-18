 const tinderUser = new Object() 
// const AnotherUser ={} none singleton object
// console.log(tinderUser);// SINGILETON OBJECT

tinderUser.id = '123abc'
tinderUser.name = "anshul"
tinderUser.isloggedIn=true
// console.log(tinderUser);

const regularUser = {
    email : "anshul@example.com",
    fullName : {
        userFullName:{
            userFullName : "ANshul",
            lastName :"Baria" 
        }
    }
}
// console.log(regularUser.fullName.userFullName);
const obj1 = {
    Key1:"value1",
    Key2:"value2"
}
const obj2 = {
    key3:"value3",
    key4:"value4"
}
// const obj3 = Object.assign(obj1,obj2)
const obj3 = Object.assign({},obj1,obj2) // it will merge the two objects and return a new object
console.log(obj3);
// console.log(obj1);

const obj4 = {...obj1,...obj2}// it will merge the two objects and return a new object\
console.log(obj4);

const obj5=[
    {email:"Anshu29@example.com"},
    {email:"Anshu19@example.com"},
    {email:"Anshu19@example.com"}
]
obj5[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));// to used in loops its converted into a string array

console.log(Object.values(tinderUser));// to used in loops its converted into a string array

console.log(Object.entries(tinderUser));// to used in loops its converted into a string array

console.log(tinderUser.hasOwnProperty("isloggedIn")); // to check if the property is present in the object or not it will return true or false
