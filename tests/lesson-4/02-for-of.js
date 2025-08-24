const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];


//Bai 2.1: In lan luot tung ky ti cua str
for (let char of str) {
    console.log(char);
};
//Bai 2.2: Tao mang dao nguoc tu str
let newStr= [];
for (let char of str) {
    newStr.unshift(char);
}
console.log(`[${newStr}]`);
// Bai 2.3: Tim va in vi tri dau tien va cuoi cung cua gia tri 3 trong arr

let firstIndex = -1;
let lastIndex = -1;
let index = 0;

for (let num of arr) {
    if (num === 3) {
        if (firstIndex === -1) {
            firstIndex = index; 
        }
        lastIndex = index; 
    }
    index++;
}
console.log(`Vi tri dau tien cua 3 la ${firstIndex}`);
console.log(`Vi tri cuoi cung cua 3 la ${lastIndex}`);

//Bai 2.4: Loc cac phan tu xuat hien 1 lan trong dupArr
let unqArr = [];

for (let num of dupArr) {
    let count = 0;
    for (let check of dupArr) {
        if (check === num) {
            count++;
        }
    }
    if (count === 1) {
        unqArr.push(num);
    }
}
console.log(unqArr);

