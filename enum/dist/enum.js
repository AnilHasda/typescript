"use strict";
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["user"] = "user";
})(Roles || (Roles = {}));
let person1 = {
    name: "anil",
    age: 22,
    role: Roles.admin
};
let person2 = {
    name: "sarkar",
    age: 23,
    role: Roles.user
};
const checkUser = (person) => {
    let { name, role } = person;
    return role === "admin" ? `${name} is ${role}` : `${name} is ${role}`;
};
console.log(checkUser(person1));
console.log(checkUser(person2));
