type getData<S, N> = (name: S, age: N) => S;
const GetData: getData<string, number> = (name, age) => {return `Hello everone my name is ${name} and I am ${age} years old.`};
console.log(GetData("Anil",23));
