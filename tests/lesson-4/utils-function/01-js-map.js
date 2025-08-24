const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//Bai 4.1: 
const adjustedScores = scores.map(function (score) {
    if (score < 90) {
        return score * 1.1;
    } else {
        return score * 0.95;
    }
});
console.log(adjustedScores);

//Bai 4.2: Chua ro

//Bai 4.3:
const doubledNumbers = numbers.map(function (num) {
    return num * 2;
});

console.log(doubledNumbers);
