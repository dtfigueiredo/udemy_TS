//ARRAYS
const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6];
const arrayOfNumbers2: Array<number> = [1, 2, 3, 4, 5, 6]; //outra sintaxe
console.log(arrayOfNumbers);
console.log(arrayOfNumbers2);
const arrayOfStrings: string[] = ["Ikki", "Pippin", "Tony"];
console.log(arrayOfStrings);

//FUNCTIONS
const myFunction = (name: string, birthYear: number): string => {
  let output: string = `Olá ${name}, você nasceu em ${birthYear}.`;
  return output;
};
console.log(myFunction("Daniel", 1990));

const greeting = (name: string): string => `Olá ${name}`;
console.log(greeting("Ikkizinho"));
