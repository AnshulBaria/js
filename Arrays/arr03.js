Arr01 = [1,2,3,4,5];
Arr02 = [6,7,8,9,10];
//console.log(Arr01+Arr02); not a perferc way 
NewArr = Arr01.concat(Arr02);
// console.log(NewArr);
// console.log(typeof NewArr);
const NewArr02 = [...Arr01, ...Arr02];
// console.log(NewArr02);
Arr03 = [1, 2, 3, 4, [5, 6, [7, 8, [9]]]];
// console.log(Arr03.flat(3));

// console.log(Array.isArray("anshul"))
// console.log(Array.from("anshul"))

let Score = 100;
let Score2 = 200;
let Score3 = 300;

console.log (Array.of (Score, Score2, Score3));