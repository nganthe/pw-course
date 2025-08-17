//Can nang ly tuong = so le chieu cao x9 roi chia 10
//Can nang toi da = so le chieu cao
//Can nang toi thieu= so le chieu cao x 8 roi chia 10.
// So le chieu cao tinh bang cm. Vi du: chieu cao 153cm thi so le la 53cm.
let myHeight = 153;
let idealWeight = myHeight % 100 * 9 / 10;
let maxWeight = myHeight % 100;
let minWeight = myHeight % 100 * 8 / 10;
console.log("Can nang ly tuong la: " + idealWeight, ",", "Can nang toi da la: " + maxWeight, ",", "Can nang toi thieu la: " + minWeight);