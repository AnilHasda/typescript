class Student{
    name:string;
    roll:number;
    className:number;
    constructor(name:string,roll:number,className:number){
        this.name=name;
        this.roll=roll;
        this.className=className;
    }
    displayData():string{
        return `Hello I am ${this.name} my roll number is ${this.roll} and I  am in class ${this.className}`;
    }
}
let student1=new Student("Anil",1,12);
console.log(student1.displayData());