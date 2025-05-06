// import { add } from "./math.js";
// 1. Scope in JavaScript

// Global Scope
// A variable declared outside of all functions or blocks. It’s accessible everywhere in your code.

// let globalVar = "I am global";
// function greet() {
// 	console.log(globalVar); // Can access globalVar here
// }
// greet();
// console.log(globalVar); // Also accessible here

// Local Scope (Function Scope)
// Variables declared inside a function. You can only access them within that function.

// function sayHello() {
//   let localVar = "I am local";
//   console.log(localVar); // ✅ OK
// }
// sayHello();
// console.log(localVar); ❌ Error: localVar is not defined

// Block Scope (Only with let and const)
// A block is everything inside {}. Variables declared with let or const inside a block can't be accessed outside.
// {
//   let blockVar = "Inside block";
//   console.log(blockVar); // ✅
// }
// // console.log(blockVar); ❌ Error
// {
//   const blockVar = "Inside block";
//   console.log(blockVar); // ✅
// }
// // console.log(blockVar); ❌ Error

// {
//   var blockVar = "Still visible";
// }
// console.log(blockVar); // ✅ Works because var is not block-scoped

// 2. Variable Hoisting
// Hoisting means moving declarations to the top of the scope. Only declarations are hoisted, not the initialization.
// Example with var:
// console.log(a); // undefined
// var a = 5;
// JS reads it as:
// var a;
// console.log(a); // undefined
// a=5;

// Example with let and const:
// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
// let b = 10;
// With let and const, the variable is hoisted but stays in a “temporal dead zone” until the line it's defined.
// var
// var x = 1;
// var x = 2; // ✅ Allowed

// // let
// let y = 1;
// // let y = 2; // ❌ Error

// // const
// const z = 5;
// // z = 10; // ❌ Error

// 4. ES6 Features (Important Modern JavaScript Features)
// ✅ Arrow Functions
// Shorter function syntax.
// Traditional
// function add(a, b) {
// 	return a + b;
// }

// // Arrow
// const add = (a, b) => a + b;
// Template Literals (Backticks)
// Makes string interpolation easier.
// let name1 = "John";
// let greeting = `Hello, ${name1}!`; // instead of "Hello, " + name + "!"
// console.log(greeting);

// ✅ Destructuring
// Pull values from arrays or objects into variables.
// Array
// let [a, b] = [1, 2]; // a = 1, b = 2

// Object
// let person = { name: "Alice", age: 25 };
// let { name, age } = person; // name = "Alice", age = 25

// Spread Operator ...
// Expands arrays/objects into individual elements.
// let arr = [1, 2, 3];
// let newArr = [...arr, 4]; // [1, 2, 3, 4]

// let obj = { a: 1, b: 2 };
// let newObj = { ...obj, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest Parameters
// Gathers multiple arguments into an array.
// function sum(...nums) {
// 	return nums.reduce((total, n) => total + n);
// }

// console.log(sum(1, 2, 3, 4)); // 10

// Default Parameters
// Set default values in functions.
// function greet(name = "Guest") {
//   console.log(`Hello, ${name}`);
// }

// greet(); // Hello, Guest

//  Let & Const
// Already covered above. Use let and const instead of var.

// for...of Loop (Great for arrays)
// let nums = [10, 20, 30];
// for (let n of nums) {
// 	console.log(n);
// }

// Promises (Async Programming)
// let fetchData = new Promise((resolve, reject) => {
// 	let success = true;
// 	success ? resolve("Data loaded") : reject("Error");
// });

// fetchData.then((data) => console.log(data)).catch((err) => console.log(err));

// Classes
// JavaScript got class syntax with ES6.
// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	greet() {
// 		console.log(`Hi, I'm ${this.name}`);
// 	}
// }

// let p = new Person("Sam");
// p.greet(); // Hi, I'm Sam

// function testVarLetConst() {
// 	for (var i = 0; i < 3; i++) {
// 		setTimeout(() => console.log("var:", i), 100);
// 	}

// 	for (let j = 0; j < 3; j++) {
// 		setTimeout(() => console.log("let:", j), 100);
// 	}
// }

// testVarLetConst();

// function multiply(x, y) {
// 	return x * y;
// }

// let multiply = (x, y) => {
// 	return x * y;
// };

// const person = {
// 	name: "Alice",
// 	age: 30,
// 	location: "New York",
// };

// const personCopy = { ...person, age: 31 };
// console.log(personCopy);

// // Extract name and location using destructuring
// const {name,location} = personCopy;
// console.log(personCopy.name,personCopy.location)

// function greet(name = "Guest", ...messages) {
// 	console.log(`Hello, ${name}`);
// 	console.log("Messages:", messages);
// }

// greet("Bob", "Welcome", "Have a good day");
// greet()
// const arr = ["a", "b"]
// arr.push("hello")
// console.log(arr)

// document.getElementById("hii").textContent = "Hello Mayank";
// let a=document.getElementsByName("language")
// console.log(a)