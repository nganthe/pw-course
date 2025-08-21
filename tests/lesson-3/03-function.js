//Bai1
function multiply(a, b) {
    return a * b;
}
mul1 = multiply(5, 7);
mul2 = multiply(6, 9);
console.log(mul1, mul2)



//Bai 2
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    };
    if (c < min) {
        min = c
    }
    return min;
}
min1 = findMin(7, 22, 90);
min2 = findMin(33, 12, 99);
console.log(min1, min2);

//Bai 3
let students = [
    { name: "Ngan", score: 7 },
    { name: "Hang", score: 8 },
    { name: "Hoa", score: 6 },

];
function getTopStudents(students, threshold) {
    let results = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            results.push(students[i].name);
        }
    }
    return results;
}
console.log(getTopStudents(students, 7));

//Bai 4
function calculateInterest(principal, rate, years) {
    return principal + (principal * rate * years / 100);
}
console.log(calculateInterest(1000000, 0.5, 5));

