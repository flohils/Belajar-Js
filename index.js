//JS Function
//1. Define Practice
function printHeart() {
  console.log('<3');
}

printHeart();

//2. Return Value Practice
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3));
console.log(multiply(9, 9));
console.log(multiply(5, 4));

//3. Scope Practice
//A
let animal = 'Giant Pacific Octopus';
function observe() {
  let animal = 'Pajama Squid';
  console.log(animal);
}
observe();

//B
let deadlyAnimal = 'Blue-Ringed Octopus';

function handleAnimal() {
  let deadlyAnimal = 'Scorpionfish';
  console.log(deadlyAnimal);
}

handleAnimal();
console.log(deadlyAnimal);

//4. Arrow Function Exercise
const sayHello = (name) => `Hello ${name}!`;

console.log(sayHello('Hagrid'));
console.log(sayHello('Luna'));

//Case Js Array
//antrian awal
let antrian = ['ray', 'fiki', 'fadhilla', 'farah'];
//tambah antrian
antrian.push('nabila'); // ["ray", "fiki", "fadhilla", "farah", "nabila"]
antrian.push('maza', 'elsi'); // ["ray", "fiki", "fadhilla", "farah", "nabila", "maza", "elsi"]
//elsi pulang
antrian.pop(); // ["ray", "fiki", "fadhilla", "farah", "nabila", "maza"]
//1,2 dapat benlanjaan
antrian.shift(); // ["fiki", "fadhilla", "farah", "nabila", "maza"]
antrian.shift(); // ["fadhilla", "farah", "nabila", "maza"]
//tomi datang
antrian.unshift('tomi'); // ["tomi", "fadhilla", "farah", "nabila", "maza"]
//antrian akhir
console.log(antrian); // ["tomi", "fadhilla", "farah", "nabila", "maza"]
