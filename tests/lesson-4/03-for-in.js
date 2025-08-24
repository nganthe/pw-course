const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//Bai 3.1: In ten va gia tri moi thuoc tinh cua student
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

//Bai 3.2: Tinh tong cac gia tri so trong student => Chua lam dc

// Bai 3.3 Tao mang chua ten cac thuoc tinh cua studen
let keysArr = [];
for (let key in student) {
    keysArr.push(key);
}
console.log(keysArr);