"use strict";
class Parents {
    name;
    property;
    constructor(name, property) {
        this.name = name;
        this.property = property;
    }
}
class childs extends Parents {
    _age;
    constructor(name, property, _age) {
        super(name, property);
        this._age = _age;
    }
    get age() {
        console.log("getter is called");
        return this._age;
    }
    set age(value) {
        console.log("setter is called");
        if (value > 150 || value < 0) {
            console.log(`please provide valid age`);
        }
        else {
            this._age = value;
        }
    }
    showData() {
        console.log({ name: this.name, property: this.property, age: this.age });
    }
}
// object for childs class
let child1 = new childs("Anil", ["car", "land"], 20);
child1.showData();
child1.age = 500;
console.log(child1.age);
