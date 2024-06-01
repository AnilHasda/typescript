"use strict";
let product = {
    item: "Laptop",
    price: 500,
    quantity: 5,
};
// function to calculate total price of product
const totalPriceCalculation = (product) => {
    let totalPrice = product.quantity * product.price;
    return totalPrice;
};
let totalPrice = totalPriceCalculation(product);
console.log({ totalPrice });
