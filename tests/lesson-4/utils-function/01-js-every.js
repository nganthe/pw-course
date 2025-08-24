const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//Bai 1: Kiem tra cac gia tri trong scor >70
const allScoresAbove70 = scores.every(function(score) {
    return score > 70;
});
console.log(allScoresAbove70);
//Bai 2: Kiem tra cac gia tri trong age >15

const ageAbove15 = ages.every(function(age) {
    return age > 15;
});
console.log(ageAbove15);

//Bai 3: Kiem tra tat ca tu trong words co do dai >3
const wordLonger3 = words.every(function(word) {
    return word.length > 3;
});
console.log(wordLonger3);
