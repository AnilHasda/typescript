enum Roles{
    admin="admin",
    user="user"
}
type Person={
    name:string;
    age:number;
    role:Roles
}
let person1:Person={
    name:"anil",
    age:22,
    role:Roles.admin
}
let person2:Person={
    name:"sarkar",
    age:23,
    role:Roles.user
}
const checkUser=(person:Person):string=>{
let {name,role}=person;
return role==="admin"?`${name} is ${role}`:`${name} is ${role}`;
}
console.log(checkUser(person1));
console.log(checkUser(person2));