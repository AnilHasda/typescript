let data:{
    name:string;
    age:number;
    email:string;
    address:string;
}={
    name:"Anil Hasda",
    age:23,
    email:"hasdaanil098@gmail.com",
    address:"Gauradaha"
};
let values:any=Object.values(data);
let entries:any=Object.entries(data);
let key:any=Object.keys(data);
console.log(values);
console.log(entries);
console.log(key);