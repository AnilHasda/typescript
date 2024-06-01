const palindrome=(name:string):boolean=>{
let split=name.split("").reverse().join("");
    return name.toLocaleLowerCase()===split.toLocaleLowerCase();
}
let data:boolean=palindrome("aRra");
console.log(data);