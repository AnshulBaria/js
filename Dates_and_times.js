// console.log(Date());
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let mycreDate =new Date(2023,0,23)
// console.log(mycreDate.toDateString());
let mynewDate = new Date ("01-14-2023")
// console.log(mycreDate.toLocaleString());

let MytimeStamp = Date.now()
// console.log(MytimeStamp);
// console.log(Math.floor(Date.now()/1000));

let NewDate = new Date()
console.log(NewDate);
console.log(NewDate.getMonth()+1);
console.log(NewDate.getDay());

console.log(NewDate.toLocaleString('default',{
    weekday: "long"
}));