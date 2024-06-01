const authorization=(age:number):string=>{
if(age>=18){
    return "Welcome to the site";
}else{
    return "Sorry ! you are not elligible to this site";
}
}
let response:string=authorization(18);
console.log(response);
