# Tong hop kien thuc bai 2
## Version control system. 
3 types:
- Local
- Centralize
- Distributed
## GIT
### Muc dich: Quan ly version ho tro lam viec giua nhieu dev.
### GIT inlcudes 3 states:
1.  Working directory: 
 - Khi da tao folder/file duoi local, su dung lenh **git init** de khoi tao thu muc duoc quan ly boi git. Khi do cac file da tao duoi local se duoc dua vao state **working directory**.
2.  Staging:
- Khi file dang o state working directory, su dung cau lenh **git add <ten file>** de chuyen file sang state **staging**. Hoac su dung cau lenh **git add .** de chuyen tat ca file co trong folder sang **staging**.
3.  Repository:
- Khi file dang o state staging, su dung cau lenh **git commit -m"message"** de chuyen nhung file dang o staging sang state **repository**
### Mot so cau lenh khac voi git:
- git status: de check status cua cac file. Neu file hien thi *mau xanh* tuc la dang o vung *staging*, neu file hien thi *mau do* thi o vung *working directory*.
- git log: de kiem tra lich su commit.
- git config user.name "<name>": cau hinh user name cho 1 repo cu the
- git config user.email "<email>": cau hinh email cho 1 repo cu the.
- git config --global user.name "<name>": cau hinh ten mac dinh cho toan bo may tinh
- git config --global user.email "<email>": cau hinh email mac dinh cho toan bo may tinh
### Git flow:
- Global config: init -> add -> commit -> push.
- Khong dung global coig: init -> config -> add -> commit -> push
## Javascript:
1. Variable (Bien). Khai bao bien:
- var <ten_bien> = <gia_tri>; (cach khai bao cu)
- let <ten_bien> = <gia_tri>; (cach khai bao moi -> nen su dung)

2. Lenh in ra man hinh:
- console.log("<ten_bien>");
3. Cong chuoi:
- console.log("My name is" + <ten_bien>);
4. Constant (Hang so). Khai bao"
- const <ten_bien> = <gia_tri>;
- Dung constant khi bien khong gan lai.
5. Data types:
- 8 data types: String, Number, Boolean, Bigint, Undefinded, Null, Symbol, Object.
- String: khai bao dang chuoi.
- Number: khai bao dang so.
- Boolean: Khai bao dang true/false
6. Comparison operator
- So sanh hon kem: a>b ( a>b), a < b (a < b), a>=b ( a> hoac = b), a<=b (a < hoac = b>) 
- So sanh bang: a===b ( so sanh a =b), a!==b (a khac b)
7. Unary operator
- i++: de tang gia tri.
- i--: de giam gia tri.
8. Conditional
- Cu phap: **if(dieu_kien) {//chay doan code o day}**
-  Eg: if(thuNhap>50) {thueTNCN = '10%'}
9. Loops:
- Cu phap: **for (khoi tao; dieu kien chay; dieu kien tang) {chay doan code o day}**
-  Eg: for (let i = 0; i<5; i++>) {console.log("My nam is Ngan"); }




