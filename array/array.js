"use strict";
let data = new Array(10, 20, 40, 30, 50);
// for(let element of data){
//     console.log(element);
// }
// data.forEach((ele:number,index:number)=>{
// console.log(index+1+". "+ele);
// })
// let filterResponse=data.map(ele=>ele>20);
// console.log(filterResponse);
// let filterResponse=data.filter(ele=>ele>20).map(ele=>{console.log(ele)});
let filterResponse = data.filter(ele => ele > 20).reduce((acc, ele) => acc += ele);
console.log("sum of filter data=" + filterResponse);
