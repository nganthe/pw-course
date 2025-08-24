const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//Bai 1.1 In lan luot tung phan tu
numbers.forEach(function (val, i) {
    console.log(`${val}`);
});

//Bai 1.2: Tinh tong, tim min max cua mang numbers
let sum = 0;
let min = numbers[0];
let max = numbers[0];
numbers.forEach(function (value) {
    sum = sum + value;
    if (value < min) { min = value };
    if (value > max) { max = value };
});
console.log(`Tong la ${sum}`);
console.log(`Min la ${min}`);
console.log(`Max la ${max}`);

//Bai 1.3
let newNumbers=[];
numbers.forEach(function (value) {
    newNumbers.push(value*2);
})

console.log(`${newNumbers}`);