"use strict";
class Student {
    name;
    roll;
    className;
    constructor(name, roll, className) {
        this.name = name;
        this.roll = roll;
        this.className = className;
    }
    displayData() {
        return `Hello I am ${this.name} my roll number is ${this.roll} and I  am in class ${this.className}`;
    }
}
let student1 = new Student("Anil", 1, 12);
console.log(student1.displayData());
