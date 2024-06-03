type Product = {
  item: string;
  price: number;
  quantity: number;
};
let product: Product = {
  item: "Laptop",
  price: 500,
  quantity: 5,
};
// function to calculate total price of product
const totalPriceCalculation = (product: Product): number => {
  let totalPrice: number = product.quantity * product.price;
  return totalPrice;
};
let totalPrice: number = totalPriceCalculation(product);
console.log({ totalPrice });
