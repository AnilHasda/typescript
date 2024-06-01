"use strict";
const palindrome = (name) => {
    let split = name.split("").reverse().join("");
    return name.toLocaleLowerCase() === split.toLocaleLowerCase();
};
let data = palindrome("aRra");
console.log(data);
