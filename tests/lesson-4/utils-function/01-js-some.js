const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];


//Bai 5.1 Kiem tra scores co gia tri nao >80 khong
const hasScoreAbove80 = scores.some(function (score) {
    return score > 80;
});
console.log(hasScoreAbove80);

//Bai 5.2: Kiem tra ages co gia tri nao <18 khong
const hasAgeBelow18 = ages.some(function (age) {
    return age < 18;
});
console.log(hasAgeBelow18);

//Bai 5.3 Kiem tra wors co tu nao dai >5 khong
const hasWordLongerThan5 = words.some(function (word) {
    return word.length > 5;
});
console.log(hasWordLongerThan5);
