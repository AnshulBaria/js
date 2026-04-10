const myObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (const key in myObject) {
    // console.log(key);
    // console.log(`${key}: keyname is for ${myObject[key]}`);
}

const myArray = [10, 20, 30, 40, 50];
for (const index in myArray) {
    // console.log(index);
    // console.log(`index is ${index} and value is ${myArray[index]}`);
}
// const map =new Map();
// map.set('name', 'Anshu');
// map.set('age', 21);
// map.set('city', 'Vadodara');
// for (const key in map) {
//     console.log(key);
//     console.log(map.get(key));
// }

