const Marvel_Heros =["ironman", "spiderman","Hulk"]
const Dc_Heros = ["superman","Flash","batman"]
// Marvel_Heros.push(Dc_Heros)
// console.log(Marvel_Heros);

// console.log(Marvel_Heros[3][2]);

const NewHeros = Marvel_Heros.concat(Dc_Heros)
// console.log(NewHeros);

const All_NewHeros = [...Marvel_Heros,...Dc_Heros]
// console.log(All_NewHeros);

const Another_Arr = [1,2,3,[4,5,6],7,[8,9,10]]
const Real_AnotherArr =  Another_Arr.flat(Infinity)
// console.log (Real_AnotherArr)

// console.log(Array.isArray("anshul"));

// console.log(Array.from("Anshul"));

// console.log(Array.from({name:"ANshul"})); interesting
let score1 =100
let score2 = 200
let score3 = 250
console.log(Array.of(score1,score2,score3));


