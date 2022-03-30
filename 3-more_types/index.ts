/*
ARRAYS
*/
const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6];
const arrayOfNumbers2: Array<number> = [1, 2, 3, 4, 5, 6]; //outra sintaxe
console.log(arrayOfNumbers);
console.log(arrayOfNumbers2);
const arrayOfStrings: string[] = ["Ikki", "Pippin", "Tony"];
console.log(arrayOfStrings);

/*
FUNCTIONS
*/
const myFunction = (name: string, birthYear: number): string => {
  let output: string = `Olá ${name}, você nasceu em ${birthYear}.`;
  return output;
};
console.log(myFunction("Daniel", 1990));

const greeting = (name: string): string => `Olá ${name}`;
console.log(greeting("Ikkizinho"));

/*
ANONYMOUS FUNCTIONS
*/
setTimeout(() => {
  const sallary: number = 1234.32;
  console.log("salário: " + sallary);
  // console.log(parseFloat(sallary)) -> TS aponta o erro
}, 2000);

/*
OBJECTS
*/
const coordinates = { x: 1234, y: 657 };

const passCoordinates = (coord: { x: number; y: number }): string => {
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

const greetingObj = (personObj: { name: string; surname: string; age?: number }): string => {
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
const showBalance = (balance: string | number): string => {
  let formatedBalance;
  typeof balance === "number"
    ? (formatedBalance = balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))
    : (formatedBalance = Number(balance).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
  return `Saldo final da conta ${formatedBalance}`;
};

console.log("input string: " + showBalance("1150"));
console.log("input number: " + showBalance(700));

/*
ALIAS -> simplifica o union type
*/
type ID = string | number;
const showID = (id: ID) => `o ID é ${id}`;

console.log(showID(32));
console.log(showID("167"));

/*
INTERFACES
  interfaces podem ser modificadas
  alias|types não podem ser modificadas
*/
interface Coordinate {
  x: number;
  y: number;
  z: number;
}

const coordObject: Coordinate = {
  x: 123,
  y: 456,
  z: 789,
};

const showCoords = (obj: Coordinate): string => `Coordenadas finais: X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}.`;
console.log(showCoords({ x: 159, y: 325, z: 678 }));
console.log(showCoords(coordObject));

/*
LITERAL TYPES
*/
