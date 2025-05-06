// // Arrays are ordered collections of values
// const numbers = [1, 2, 3, 4, 5];
// console.log("A simple array:", numbers);

// // Arrays can hold different types of values
// const mixedArray = [42, "hello", true, null, { name: "John" }];
// console.log("Arrays can contain different data types:", mixedArray);

// // Arrays are zero-indexed (first element is at position 0)
// console.log("First element:", numbers[0]); // 1
// console.log("Second element:", numbers[1]); // 2

// // Arrays have a length property
// console.log("Array length:", numbers.length); // 5

// // Arrays are reference types (objects)
// console.log("Type of array:", typeof numbers); // object
// console.log("Is array?", Array.isArray(numbers)); // true

//************************************************************************************************************************/

// console.log("CREATING ARRAYS\n");

// // 1. Array literal notation (most common)
// const fruits = ["apple", "banana", "orange"];
// console.log("Array literal:", fruits);

// // 2. Using the Array constructor
// const colors = new Array("red", "green", "blue");
// console.log("Array constructor:", colors);

// // 3. Creating an empty array and adding elements
// const vehicles = [];
// vehicles.push("car");
// vehicles.push("bike");
// vehicles.push("boat");
// console.log("Built array:", vehicles);

// // 4. Array.from() - create arrays from array-like objects
// const letters = Array.from("hello");
// console.log("Array.from string:", letters);

// // 5. Array.of() - creates array from arguments
// const numbers = Array.of(1, 2, 3, 4, 5);
// console.log("Array.of:", numbers);

// // 6. Creating arrays with specific length
// const emptySlots = new Array(5); // Creates array with 5 empty slots
// console.log("Empty array with length 5:", emptySlots);

// // 7. Creating arrays with spread operator
// const original = [1, 2, 3];
// const copy = [...original];
// console.log("Array created with spread:", copy);

// // 8. Creating arrays with Array.fill()
// const filled = new Array(5).fill(0);
// console.log("Filled array:", filled);

//************************************************************************************************************************/

// console.log("ACCESSING AND MODIFYING ARRAY ELEMENTS\n");

// const fruits = ["apple", "banana", "orange", "grape", "mango"];
// console.log("Original array:", fruits);

// // Accessing elements using index
// console.log("\nAccessing elements:");
// console.log("First element:", fruits[0]); // apple
// console.log("Third element:", fruits[2]); // orange
// console.log(fruits.length);
// console.log("Last element:", fruits[fruits.length - 1]); // mango

// // Accessing with negative indices (using at() method)
// console.log("\nAccessing with negative indices:");
// console.log("Last element:", fruits.at(-1)); // mango
// console.log("Second-to-last element:", fruits.at(-2)); // grape

// // Modifying elements
// console.log("\nModifying elements:");
// fruits[1] = "pear"; // Change banana to pear
// console.log("After changing second element:", fruits);

// // Adding elements to the end
// fruits.push("kiwi");
// console.log("After adding to end:", fruits);

// // Adding elements to the beginning
// fruits.unshift("strawberry");
// console.log("After adding to beginning:", fruits);

// // Removing the last element
// const lastFruit = fruits.pop();
// console.log("Removed last fruit:", lastFruit);
// console.log("After removing last element:", fruits);

// // Removing the first element
// const firstFruit = fruits.shift();
// console.log("Removed first fruit:", firstFruit);
// console.log("After removing first element:", fruits);

// // Changing multiple elements with splice
// // splice(start, deleteCount, ...itemsToAdd)
// fruits.splice(1, 2, "cherry", "blueberry");
// console.log("After splice:", fruits);

//************************************************************************************************************************/

// console.log("ARRAY METHODS\n");

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const fruits = ["apple", "banana", "orange", "grape", "mango"];

// console.log("Original arrays:");
// console.log("numbers:", numbers);

// // METHODS THAT MODIFY THE ORIGINAL ARRAY (MUTATING METHODS)
// console.log("\n--- MUTATING METHODS ---");

// // push() - adds elements to the end
// const newLength = fruits.push("kiwi", "pineapple");
// console.log("push() - adds to end:", fruits, "new length:", newLength);

// console.log("fruits:", fruits);
// // pop() - removes the last element
// const lastFruit = fruits.pop();
// console.log("pop() - removes last:", fruits, "removed:", lastFruit);

// // unshift() - adds elements to the beginning
// fruits.unshift("strawberry");
// console.log("unshift() - adds to beginning:", fruits);

// // shift() - removes the first element
// const firstFruit = fruits.shift();
// console.log("shift() - removes first:", fruits, "removed:", firstFruit);

// // splice() - adds/removes elements from any position
// // splice(start, deleteCount, ...itemsToAdd)
// const removed = fruits.splice(2, 3, "peach", "plum");
// console.log(
// 	"splice() - adds/removes at position:",
// 	fruits,
// 	"removed:",
// 	removed
// );

// // sort() - sorts the array
// fruits.sort();
// console.log("sort() - alphabetical order:", fruits);

// // reverse() - reverses the array
// fruits.reverse();
// console.log("reverse() - reverse order:", fruits);

// // fill() - fills array with a static value
// const filledArray = [1, 2, 3, 4, 5].fill(0, 1, 4);
// console.log("fill() - fill with value:", filledArray);

// // METHODS THAT CREATE NEW ARRAYS (NON-MUTATING METHODS)
// console.log("\n--- NON-MUTATING METHODS ---");

// // concat() - combines arrays
// const moreFruits = ["watermelon", "papaya"];
// const allFruits = fruits.concat(moreFruits);
// console.log("concat() - combines arrays:", allFruits);

// // slice() - extracts a section of an array
// const sliced = numbers.slice(3, 7);
// console.log("slice() - extracts section:", sliced);

// // map() - creates a new array by transforming each element
// const doubled = numbers.map((num) => num * 2);
// console.log("map() - transforms elements:", doubled);

// // filter() - creates a new array with elements that pass a test
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log("filter() - elements that pass test:", evenNumbers);

// // reduce() - reduces array to a single value
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log("reduce() - sum of all numbers:", sum);

// // flat() - flattens nested arrays
// const nested = [1, [2, 3], [4, [5, 6]]];
// console.log("flat(1) - flatten one level:", nested.flat());
// console.log("flat(2) - flatten two levels:", nested.flat(2));

// // flatMap() - combination of map() and flat()
// const sentences = ["hello world", "goodbye space"];
// const words = sentences.flatMap((sentence) => sentence.split(" "));
// console.log("flatMap() - map and flatten:", words);

// // SEARCH AND ITERATION METHODS
// console.log("\n--- SEARCH AND ITERATION METHODS ---");

// // indexOf() - finds the index of an element
// console.log("indexOf('orange'):", fruits.indexOf("orange"));

// // lastIndexOf() - finds the last index of an element
// console.log("lastIndexOf('orange'):", fruits.lastIndexOf("orange"));

// // includes() - checks if an array contains an element
// console.log("includes('mango'):", fruits.includes("mango"));

// // find() - returns the first element that passes a test
// const firstBigNumber = numbers.find((num) => num > 5);
// console.log("find() - first number > 5:", firstBigNumber);

// // findIndex() - returns the index of the first element that passes a test
// const indexOfBigNumber = numbers.findIndex((num) => num > 5);
// console.log("findIndex() - index of first number > 5:", indexOfBigNumber);

// // every() - tests if all elements pass a test
// const allPositive = numbers.every((num) => num > 0);
// console.log("every() - all numbers positive?", allPositive);

// // some() - tests if any elements pass a test
// const hasEven = numbers.some((num) => num % 2 === 0);
// console.log("some() - has even numbers?", hasEven);

// // forEach() - executes a function on each element
// console.log("forEach() - logging each fruit:");
// fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`));

// // OTHER USEFUL METHODS
// console.log("\n--- OTHER USEFUL METHODS ---");

// // join() - joins all elements into a string
// console.log("join(', '):", fruits.join(", "));

// // toString() - converts array to string
// console.log("toString():", fruits.toString());

// // Array.from() - creates array from iterable
// console.log("Array.from('hello'):", Array.from("hello"));

// // Array.isArray() - checks if value is an array
// console.log("Array.isArray(fruits):", Array.isArray(fruits));
// console.log("Array.isArray('string'):", Array.isArray("string"));

// // entries(), keys(), values() - returns iterators
// console.log("Using entries() to get [index, value] pairs:");
// for (const [index, value] of fruits.entries()) {
// 	console.log(`${index}: ${value}`);
// }
//********************************************************************************************************************** */

// console.log("ARRAY DESTRUCTURING\n");

// // Basic destructuring
// const colors = ["red", "green", "blue", "yellow", "purple"];
// console.log("Original array:", colors);

// // Assigning variables from array elements
// const [first, second, third] = colors;
// console.log("Basic destructuring:");
// console.log("first:", first);   // red
// console.log("second:", second); // green
// console.log("third:", third);   // blue

// // Skipping elements
// const [primary, , tertiary] = colors;
// console.log("\nSkipping elements:");
// console.log("primary:", primary);   // red
// console.log("tertiary:", tertiary); // blue

// // Using rest pattern to collect remaining elements
// const [head, ...tail] = colors;
// console.log("\nRest pattern:");
// console.log("head:", head);   // red
// console.log("tail:", tail);   // ["green", "blue", "yellow", "purple"]

// // Default values
// const [first2, second2, third2, fourth2, fifth2, sixth2 = "black"] = colors;
// console.log("\nDefault values:");
// console.log("fifth2:", fifth2);   // purple
// console.log("sixth2:", sixth2);   // black (default value)

// // Swapping variables
// let a = 1;
// let b = 2;
// console.log("\nSwapping variables:");
// console.log("Before swap: a =", a, "b =", b);
// [a, b] = [b, a];
// console.log("After swap: a =", a, "b =", b);

// // Destructuring function returns
// function getCoordinates() {
//   return [10, 20, 30];
// }
// const [x, y, z] = getCoordinates();
// console.log("\nDestructuring function returns:");
// console.log("x:", x, "y:", y, "z:", z);

// // Nested destructuring
// const nestedArray = ["a", ["b", "c"], "d"];
// const [first3, [second3, third3], fourth3] = nestedArray;
// console.log("\nNested destructuring:");
// console.log("first3:", first3);   // a
// console.log("second3:", second3); // b
// console.log("third3:", third3);   // c
// console.log("fourth3:", fourth3); // d


//****************************************************************************************************************/
// console.log("NESTED ARRAYS (MULTIDIMENSIONAL ARRAYS)\n");

// // Creating a 2D array (matrix)
// const matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// console.log("2D array (matrix):");
// console.log(matrix);

// // Accessing elements in a 2D array
// console.log("\nAccessing elements:");
// console.log("matrix[0][0]:", matrix[0][0]); // 1
// console.log("matrix[1][1]:", matrix[1][1]); // 5
// console.log("matrix[2][2]:", matrix[2][2]); // 9
// console.log("matrix[1][2]:", matrix[1][2]); // 6
// console.log("matrix[2][1]:", matrix[2][1]); // 8
// console.log("matrix[2][1]:", matrix[2][2]); // 8

// // Modifying elements in a 2D array
// matrix[1][1] = 50;
// console.log("\nAfter modifying middle element:");
// console.log(matrix);

// // Iterating through a 2D array
// console.log("\nIterating through 2D array:");
// for (let i = 0; i < matrix.length; i++) {
// 	for (let j = 0; j < matrix[i].length; j++) {
// 		console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
// 	}
// }

// // Using forEach with 2D arrays
// console.log("\nUsing forEach with 2D array:");
// matrix.forEach((row, i) => {
// 	row.forEach((value, j) => {
// 		console.log(`matrix[${i}][${j}] = ${value}`);
// 	});
// });

// // Creating a 3D array
// const cube = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];
// console.log("\n3D array:");
// console.log(cube);
// console.log("cube[1][0][1]:", cube[1][0][1]); // 6

// // Flattening nested arrays
// const nestedNumbers = [
// 	[1, 2],
// 	[3, 4],
// 	[5, 6],
// ];
// console.log("\nFlattening nested arrays:");
// console.log("Original nested array:", nestedNumbers);

// // Using flat()
// const flattened1 = nestedNumbers.flat();
// console.log("Using flat():", flattened1);

// // Using reduce() and concat()
// const flattened2 = nestedNumbers.reduce((acc, curr) => acc.concat(curr), []);
// console.log("Using reduce() and concat():", flattened2);

// // Using spread operator
// const flattened3 = [].concat(...nestedNumbers);
// console.log("Using spread operator:", flattened3);

// // Practical example: Tic-tac-toe board
// const ticTacToe = [
// 	["X", "O", "X"],
// 	["O", "X", "O"],
// 	["O", "X", "X"],
// ];
// console.log("\nTic-tac-toe board:");
// ticTacToe.forEach((row) => console.log(row.join(" | ")));

// // Jagged arrays (rows of different lengths)
// const jaggedArray = [
// 	[1, 2, 3],
// 	[4, 5],
// 	[6, 7, 8, 9],
// ];
// console.log("\nJagged array (rows of different lengths):");
// console.log(jaggedArray);

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");

// console.log(colors);

// let result = NaN == NaN;
// console.log({ result });

// result = NaN === NaN;
// console.log({ result });