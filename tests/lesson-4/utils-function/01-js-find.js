const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];
//Bai 3.1" Tim gia tri dau tien trong scores >80
const firstScoreAbove80 = scores.find(function(score) {
    return score > 80;
});

console.log(firstScoreAbove80);

//bai 3.2 Tim gia tri dau tien trong ades >20

const firstAgeAbove20 = ages.find(function(age) {
    return age > 20;
});

console.log(firstAgeAbove20);

//Bai 3.3: Tim tu dau tien trong words co do dai >5 
const firstLongWord = words.find(function(word) {
    return word.length > 5;
});

console.log(firstLongWord);