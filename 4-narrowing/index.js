"use strict";
/*
TYPEOF / TYPE GUARD
*/
const sum = (a, b) => {
    if (typeof a === "string" && typeof b === "string") {
        return parseFloat(a) + parseFloat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return "Impossível realizar operação.";
    }
};
console.log(sum("5", "69"));
console.log(sum(4, 15.57));
console.log(sum("19", 2));
/*
CHECANDO SE UM VALOR EXISTE
*/
const resolvingOperations = (arr, operation) => {
    switch (operation) {
        case "sum":
            return arr.reduce((i, total) => i + total);
        case "multiply":
            return arr.reduce((i, total) => i * total);
        default:
            return `Favor definir uma operação válida.`;
    }
};
console.log(resolvingOperations([1, 2, 3, 4, 5]));
console.log(resolvingOperations([1, 2, 3, 4, 5], "sum"));
console.log(resolvingOperations([1, 2, 3, 4, 5], "multiply"));
/*
INSTANCE OF
*/
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const marie = new User("Marie Doe");
const john = new SuperUser("John Doe");
console.log(marie);
console.log(john);
const greetingUSer = (user) => {
    if (user instanceof SuperUser) {
        return `Hello, SuperUser, ${user.name}`;
    }
    else if (user instanceof User) {
        return `Hello, ${user.name}`;
    }
};
console.log(greetingUSer(marie));
console.log(greetingUSer(john));
