const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//Bai 6.1: Tinh tong cac gia tri trong scores
const totalScores = scores.reduce(function(sum, score) {
    return sum + score;
}, 0);
console.log(totalScores);

// Bai 6.2: Tinh tich cua gia tri trong mumbers

const mulNumbers = numbers.reduce(function(mul, number) {
    return mul * number;
}, 1);
console.log(mulNumbers);

//Bai 6.3: Tinh tong cac gia tri trong expense

const totalExpenses = expenses.reduce(function(sum, expense) {
    return sum + expense;
}, 0);
console.log(totalExpenses);