class Parents {
  constructor(public name: string, public property: string[]) {}
}
class childs extends Parents {
  constructor(name: string, property: string[],public _age: number) {
    super(name, property);
  }
  get age() {
    console.log("getter is called");
    return this._age;
  }
  set age(value) {
    console.log("setter is called");
    if (value > 150 || value < 0) {
      console.log(`please provide valid age`);
    }else{
        this._age=value;
    }
  }
  showData() {
    console.log({ name: this.name, property: this.property, age: this.age });
  }
}

// object for childs class
let child1 = new childs("Anil", ["car", "land"], 20);
child1.showData();
child1.age=500;
console.log(child1.age);