class Parents {
  protected name: string;
  property: string[];
  constructor(name: string, property: string[]) {
    this.name = name;
    this.property = property;
  }
  showParentData() {
    console.log({ name: this.name, property: this.property });
  }
}
class children extends Parents {
  age: number;
  constructor(name: string, property: string[], age: number) {
    super(name, property);
    this.age = age;
  }
  showChildData() {
    console.log({ name: this.name, propery: this.property, age: this.age });
  }
}
// object for parent class
let parentData = new Parents("Ram", ["car", "money", "land"]);
parentData.showParentData();
// console.log(parentData.name);

// object for child class
let childData = new children("kush", ["car", "land", "money"], 20);
childData.showChildData();
