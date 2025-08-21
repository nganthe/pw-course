# Tổng hợp kiến thức bài 3
## GIT
1. Git
- Thay doi commit message: **git commit --amend** hoac nhanh nhat la **git commit --amend -m"message"**
- Dua file tu staging area ve working directory: **git restore --staged < file path >**
- Dua commit gan nhat tu vung repository ve working directory: **git reset HEAD!1**
2. Tạo branch
 -  **git branch <ten_branch>**
 - **git checkout <ten_branch>**
- **git checkout -b <ten_branch>**
- De kiem tra cac branch hien tai dang co dung lenh: **git branch**
3. gitignore
- Tao file **.gitignore** để git bỏ qua không quản lý tất cả các file được list trong file .gitignore
- Ignore file se nhap ten file <file_name> vao file .gitignore.
- Ignore folder se nhap ten fifolderle <folder_name> vao file .gitignore.
## Javascript
1. Convention:
- kebab-case: tên file
- cameClass: tên biến
- PascalCase: tên class.
2. Format console.log:
- console.log(`${ten_bien}')
- Eg: 
let name = "Ngan";
let age = 18;
console.log(`Ten toi la ${name} - Toi ${age} tuoi`);
thay vi `console.log("Ten toi la " + name + "-" + age);`
3. Object: dung de luu tap hop cac gia tri vao cung 1 bien hoac hang so.
- Khai bao: let/const <ten_object> = {<thuoc_tinh1>: <gia_tri1>, <thuoc_tinh2>:<gia_tri2>....}
- <thuoc_tinh>: giong nhu dat ten bien (name, age....)
- <gia_tri>: co kieu giong bien( Ngan, 18...), hoac co the la 1 object khac.
- Eg:
const student = {
    name: 'Ngan',
    address: 'HN',
    isStudent: false,
    class: {
        name: 'K17',
        year: 2025,
    }
};
console.log(`name: ${student.name}`);
student.name = 'Ngan The'; //gán lại gia tri cho thuoc tinh name
console.log(`class name: ${student.class.name}`);
4. Logical operator:
- &&: cả 2 đều đúng.
- ||: một trong 2 đúng
- !: đảo ngược lại giá trị.
- Eg:
let a = true;
let b = false;
if (a && b) {
     console.log('Ca a va b deu dung');
 }

if (a ||b){
     console.log('a hoac b dung');
}
console.log(!a); // In ra gia tri nguoc lai cua a.

5. Array
- Khai báo: `const listStudent = ['Ngan', 20, false];`
- Truy xuat độ dài mảng: listStudent.length. Vi du voi khai bao ben tren thi length = 3
- Lấy phần tử theo index: listStudent[0]. Index bat dau tu 0 la cua phan tu dau tien. Voi khai bao ben tren se la phan tu 'Ngan'.

6. Function: là một đoạn code được đặt tên và có thể tái sử dụng.
- Khai báo: function <function_name>(){
    //code
}
- Eg:
function sum(a,b){
    return a+b;
}
const total = sum(5,3);
console.log(total);







