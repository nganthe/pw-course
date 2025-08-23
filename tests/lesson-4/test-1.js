//Bai 1
let departurePlanet = " Trai Dat";
let mission = " Kham pha Vu Tru K17";
let crew = ['Ngan', 'Thao', 'Tuyet', 'Xuan', 'Thinh', 'Tung', 'Yen'];
function launchShip(crew) {
    let crewList = [];
    for (let i = 0; i < crew.length; i++) {
        crewList.push(crew[i]);
    }
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}
console.log(launchShip(crew));
//Bai 2
function calculateDistance(speed, time) {
    return speed * time;
}
console.log(calculateDistance(1000, 24));

//Bai 3
function convertTimeToHex(time) {
    return time.toString(16);

}
console.log(convertTimeToHex(120));

//Bai 4
function decryptCode(code) {
    let result = "";
    for (let i = 0; i < code.length; i++) {
        let char = code[i];
        if (char >= "a" && char <= "z") {
            result = result + char.toUpperCase();
        }
        else if (char >= "A" && char <= "Z") {
            result = result + char.toLowerCase();
        }
        else {
            result = result + char;
        }
    }
    return result;

}
console.log(decryptCode("K17 Challenge"));

//Bai 5
function returnToEarth() {
    console.log("Chuan bi tro ve Trai Dat!");
}
returnToEarth();



