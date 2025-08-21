//Bai 1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i
}
console.log(sum);
//Bai 3

let oddNumber = [];
for (let i = 1; i < 100; i = i + 2) {
    oddNumber.push(i)
}
console.log(oddNumber)
//Bai 2.

for (i = 2; i <= 9; i++) {
    console.log('Bang cuu chuong cua ' + i + " la: ");
    for (j = 1; j <= 10; j++) { console.log(i + 'x' + j + '=' + i * j) };
}

//Bai 4

for (i = 1; i <= 10; i++) {
    console.log(`ngan${i}@gmail.com`)
}

//Bai 5
let doanhthu = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 200 },
    { month: 4, total: 200 },
    { month: 5, total: 200 },
    { month: 6, total: 200 },
    { month: 7, total: 200 },
    { month: 8, total: 200 },
    { month: 9, total: 200 },
    { month: 10, total: 200 },
    { month: 11, total: 200 },
    { month: 12, total: 200 }
];
let tong = 0;
for (i = 0; i < doanhthu.length; i++) {
    tong = tong + doanhthu[i].total;
}
console.log(tong)

