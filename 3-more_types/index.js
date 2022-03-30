"use strict";
//ARRAYS
const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const arrayOfNumbers2 = [1, 2, 3, 4, 5, 6]; //outra sintaxe
console.log(arrayOfNumbers);
console.log(arrayOfNumbers2);
const arrayOfStrings = ["Ikki", "Pippin", "Tony"];
console.log(arrayOfStrings);
//FUNCTIONS
const myFunction = (name, birthYear) => {
    let output = `Olá ${name}, você nasceu em ${birthYear}.`;
    return output;
};
console.log(myFunction("Daniel", 1990));
const greeting = (name) => `Olá ${name}`;
console.log(greeting("Ikkizinho"));
