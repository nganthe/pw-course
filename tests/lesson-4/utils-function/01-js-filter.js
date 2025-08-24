const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//Bai 2.1: Loc cac gia tri trong score >80

const scoresAbove80 = scores.filter(function (score) {
    return score > 80;
});

console.log(scoresAbove80);

//Bai 2.2: Loc cac gia tri age >18
const ageAbove18 = ages.filter(function (age) {
    return age > 18;
});

console.log(ageAbove18);

//Bai 2.3: Loc cac tu trong words co do dai >5

const wordLonger5 = words.filter(function(word) {
    return word.length > 5;
});
console.log(wordLonger5);


