"use strict";
/*
ARRAYS
*/
const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const arrayOfNumbers2 = [1, 2, 3, 4, 5, 6]; //outra sintaxe
console.log(arrayOfNumbers);
console.log(arrayOfNumbers2);
const arrayOfStrings = ["Ikki", "Pippin", "Tony"];
console.log(arrayOfStrings);
/*
FUNCTIONS
*/
const myFunction = (name, birthYear) => {
    let output = `Olá ${name}, você nasceu em ${birthYear}.`;
    return output;
};
console.log(myFunction("Daniel", 1990));
const greeting = (name) => `Olá ${name}`;
console.log(greeting("Ikkizinho"));
/*
ANONYMOUS FUNCTIONS
*/
setTimeout(() => {
    const sallary = 1234.32;
    console.log("salário: " + sallary);
    // console.log(parseFloat(sallary)) -> TS aponta o erro
}, 2000);
/*
OBJECTS
*/
const coordinates = { x: 1234, y: 657 };
const passCoordinates = (coord) => {
    let coordX = `Valor da coordenada X = ${coord.x}`;
    let coordY = `Valor da coordenada Y = ${coord.y}`;
    return `${coordX}
${coordY}`;
};
console.log(passCoordinates(coordinates));
// console.log(passCoordinates(1, 5));
// console.log(passCoordinates([1, 3]));
// console.log(passCoordinates({ nome: 1234, sobrenome: 657 }));
/*
OBJECTS WITH OPTIONALS PROPS
*/
const person = {
    name: "Daniel",
    surname: "Figueiredo",
    age: 32,
};
const person2 = {
    name: "Daniel",
    surname: "Figueiredo",
};
const greetingObj = (personObj) => {
    let greeting = "";
    personObj.age
        ? (greeting = `Olá ${personObj.name} ${personObj.surname}, idade ${personObj.age} anos.`)
        : (greeting = `Olá ${personObj.name} ${personObj.surname}.`);
    return greeting;
};
console.log(greetingObj(person));
console.log(greetingObj(person2));
/*
UNION TYPE
*/
const showBalance = (balance) => {
    let formatedBalance;
    typeof balance === "number"
        ? (formatedBalance = balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))
        : (formatedBalance = Number(balance).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
    return `Saldo final da conta ${formatedBalance}`;
};
console.log("input string: " + showBalance("1150"));
console.log("input number: " + showBalance(700));
const showID = (id) => `o ID é ${id}`;
console.log(showID(32));
console.log(showID("167"));
const coordObject = {
    x: 123,
    y: 456,
    z: 789,
};
const showCoords = (obj) => `Coordenadas finais: X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}.`;
console.log(showCoords({ x: 159, y: 325, z: 678 }));
console.log(showCoords(coordObject));
/*
LITERAL TYPES
*/
const showDirection = (direction) => {
    return `A direção escolhida foi ${direction}`;
};
console.log(showDirection("center"));
console.log(showDirection("left"));
console.log(showDirection("right"));
// console.log(showDirection('top')) => erro
/*
NON NULL ASSERTION OPERATORS
*/
const p = document.getElementById("someSpan");
console.log(p.innerHTML); //operador '!' é utilizado para validar o erro quando sabemos que o valor existe
/*
BigInt só está disponível com o EStarget = ES2020
*/
const n = 10000n;
console.log(n + 100n);
/*
Symbols => cria uma referência única para um determinado valor. mesma lógica do Ruby
*/
const symbolA = Symbol("Daniel");
const symbolB = Symbol("Daniel");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
