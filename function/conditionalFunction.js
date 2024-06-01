"use strict";
const authorization = (age) => {
    if (age >= 18) {
        return "Welcome to the site";
    }
    else {
        return "Sorry ! you are not elligible to this site";
    }
};
let response = authorization(18);
console.log(response);
