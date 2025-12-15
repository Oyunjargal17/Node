const { add, subtract } = require("./math");
console.log(add(3, 5));
console.log(subtract(30, 9));

const { sayHello } = require("./greeting");
console.log(sayHello("Bat"));

const { isEven } = require("./numberCheck");
console.log(isEven(20));

const { toUpper, textLength } = require("./textUtils");
console.log(toUpper("hello world"));
console.log(textLength("hello world"));

const { isAdult } = require("./ageCheck");
console.log(isAdult(17));
