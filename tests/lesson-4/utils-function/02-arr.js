const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];


//Bai 1: Push
numbers.push(4);
names.push("David");
console.log(numbers);
console.log(names);

// // 2. pop
let newNumber = numbers.pop();
console.log(newNumber);

// //Bai 3: 
numbers.unshift(0);
names.unshift("David");
console.log(numbers);
console.log(names);
// //Bai 4:
let shiftedNumber = numbers.shift();
console.log(shiftedNumber);
