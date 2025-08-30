
const numbers = [78,5,89,90];

console.log(numbers);
console.log(...numbers);


const max = Math.max(...numbers);

console.log(max);


// const first = [1,2,3,4,5,6,7];

// const second = first;

// second.push(8);

// console.log(first);


const first = [1,2,3,4,5,6,7];

const second = [...first];

const third =[... first ,9,10];

second.push(8);

// console.log(second);
// console.log(third);


const person = {name : 'khan',age : 23};
const emp = {designation : 'dev' , ...person};

console.log(emp);