// for of
let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

let str = "hello world"
for (const greet of str) 
    {
        if(greet === ' ')
        continue;
    //  console.log(greet);
}

// maps
const map =new Map();
map.set('name', 'Anshu');
map.set('age', 21);
map.set('city', 'Vadodara');

for (const [key, value] of map.entries()) {
    console.log(key, value);
}
// console.log(map);

const mYSet = {
    "game": "cricket",
    "player": "virat",
    "team": "rcb"
}
// Cannot access 'myTeam' before initialization
// for (const myTeam of myTeam) {
//     console.log(myTeam);
    
// }