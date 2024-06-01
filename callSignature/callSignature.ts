type Student = {
  name: string;
  age: number;
  greet: (country: string)=>string;
};
let student: Student = {
  name: "Anil Hasda",
  age: 23,
  greet: function (country){
    return `Hello everyone my name is ${this.name} . I am ${this.age} years old and I am from ${country} . Thank you !`;
  },
};
 console.log(student.greet("Nepal"));
