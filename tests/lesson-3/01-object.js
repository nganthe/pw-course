// Bai 1
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(car.year);
//Bai 2
let person = {
    name: "Ngan The",
    address: {
        street: "Nguyen Chanh",
        city: "Hanoi",
        country: "Vietnam"
    }
}
console.log(person.address.street);
//Bai 3
let student ={
    name: "Olivia",
    grades:{
        math: 8,
        english: 9
    }
}
console.log(student["grades"]["math"]);

//Bai 4
let settings ={
    volumn: 90,
    brightness: 75
}
settings.volumn = 95;
console.log(settings);
//Bai 5
let bike ={
}
bike["color"] = "white";

//Bai 6
let employee={
    name: "Hai Yen",
    age: 24,
}
delete employee.age;
console.log(employee)
//Bai 7
let school={
    classA:['An','Binh','Chau'],
    classB: ['Dao', 'Huong', 'Giang']
}
console.log(school);
