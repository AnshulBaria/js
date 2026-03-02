const Marver_heros =["Thor","Ironman","Spiderman"]
const Dc_Heros =["flash","batman","Superman"]
const my_new_heros = Marver_heros.concat(Dc_Heros);
console.log(my_new_heros);

const new_list  =[...Dc_Heros,...Marver_heros]

console.log(new_list)

const my_arr =[1,2,3,[4,5],6,[7,8,9]]
const Real_unather_arr = my_arr.flat(Infinity) 
console.log(Real_unather_arr)


console.log(Array.isArray("helly"))
console.log(Array.from("anshul"))


let Score1= 100;
let Score2 = 200;
let Socre3 = 300;
console.log(Array.of(Score1,Score2,Socre3))