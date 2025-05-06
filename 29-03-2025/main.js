// bind,call,apply

//bind

// const user = {
// 	name: "mayank",
// 	printName() {
// 		console.log(this.name);
// 	},
// };
// const user2 = {
// 	name: "patel",
// };
// const print = user.printName.bind(user2);
// print();

// const user = {
// 	name: "mayank",
// 	lname: "patel",
// 	getfullname(greeting, timeOfTheDay) {
// 		return `${greeting},${timeOfTheDay},${this.name}${this.lname}`;
// 	},
// };
// const user2 = {
// 	name: "john",
// 	lname: "doe",
// };
// const print = user.getfullname.bind(user2,"Hii", "Morning")
// console.log(print())
// console.log(user.getfullname.call(user2,"Hii", "Morning"));
// console.log(user.getfullname.apply(user2,["Hii", "Morning"]));

// console.log(this);
// const user = {
// 	name: "mayank",
// 	printName: function () {
// 		console.log("upper: ", this);
// 		const printAgain = () => {
// 			console.log("lower: ", this);
// 		};
// 		printAgain();
// 	},
// };
// user.printName();

// const user = {
// 	name: "mayank",
// 	printName: function () {
// 		console.log("upper: ", this);
// 		const printAgain = function () {
// 			console.log("lower: ", this);
// 		};
// 		printAgain();
// 	},
// };
// user.printName()

// const add = (...nums) => {
// 	let sum = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		// console.log(arguments[i])
// 		sum += nums[i];
// 	}
// 	return sum;
// };
// let result = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(result);

// function add() {
// 	let argumentArray = Array.from(arguments);
// 	// console.log(argumentArray)
// 	let sum = 0;
// 	for (let i = 0; i < argumentArray.length; i++) {
// 		// console.log(arguments[i])
//           sum += argumentArray[i];

// 	}
// 	return sum;
// }
// let result = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(result);

// let person = {
// 	fname: "mayank",
// 	lname: "patel",
// 	age: 23,
// 	eyecolor: "brown",
// 	city: "Surat",
// };

// for (const key in person) {
// 	console.log(key,person[key]);
// }

// Methods for Defining JavaScript Objects
// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor
// Using Object.assign()
// Using Object.create()
// Using Object.fromEntries()

//object creating method 1

// const obj = {}
// obj.fname = "mayank"
// obj.lname = "patel"
// obj.age = 23
// obj.eyecolor="brown"
// console.log(obj)

//object creating method 2

// const person = new Object()
// person.fname = "mayank"
// person.lname = "patel"
// person.age = 23
// person.eyecolor="brown"
// console.log(person)

//object creating method 3

// function Person(fname, lname, age, eyecolor) {
// 	this.firstName = fname;
// 	this.lastName = lname;
// 	this.age = age;
//      this.eyecolor = eyecolor;
//      this.nationality = "Indian";
// }
// const myFather = new Person("haresh", "patel", 50, "black");
// const myMother = new Person("daxa", "patel", 51, "brown");
// const mySister = new Person("keem", "patel", 31, "black");

// console.log(myFather)
// console.log(myMother)
// console.log(mySister)

//***************object **************/

// let person = {
// 	firstName: "John",
// 	lastName: "Doe",
// };

// person.greet = function () {
// 	console.log("Hello!");
// };
// console.log(person)
// person.greet();

// let person = {
// 	firstName: "John",
// 	lastName: "Doe",
// };

// function greet() {
// 	console.log("Hello, World!");
// }

// person.greet = greet;

// person.greet();

// let person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	greet: function () {
// 		return console.log("Hello, World!");
// 	},
// 	getFullName: function () {
// 		return this.firstName + " " + this.lastName;
// 	},
// };
// console.log(person.getFullName());

// function Person(firstName, lastName) {
// 	console.log(new.target);

// 	this.firstName = firstName;
// 	this.lastName = lastName;

// 	this.getFullName = function () {
// 		return this.firstName + " " + this.lastName;
// 	};
// }
// let person =Person("John", "Doe");
// console.log(person)

// function Person(firstName, lastName) {
// 	if (!new.target) {
// 		throw Error("Cannot be called without the new keyword");
// 	}

// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }
//  let person = Person("John", "Doe");
//  console.log(person.firstName);

// function Person(firstName, lastName) {
// 	if (!new.target) {
// 		return new Person(firstName, lastName);
// 	}

// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }

// let person = Person("John", "Doe");

// console.log(person.firstName);
// let person = { name: "John" };
// console.log(person.toString())
// console.log(person)
// console.log(typeof Object);
// console.log(Object.prototype.constructor === Object);
// function Person(name) {
// 	this.name = name;
// }
// console.log(Person)
// console.log(Person.prototype)

// let p1 = new Person("John");
// let greeting = p1.greet();
// console.log(greeting);
// let s = p1.toString();
// console.log(s);
// p1.fly();
// "use strict";
// function show() {
// 	console.log(this === window); // true
// }

// show();
// window.show();
// function show() {
// 	"use strict";
// 	console.log(this === undefined);

// 	function display() {
// 		console.log(this === undefined);
// 	}
// 	display();
// }

// show();

// let car = {
//     brand: 'Honda',
//     getBrand: function () {
//         return this.brand;
//     }
// }
// let brand = car.getBrand;
// console.log(brand())
// console.log(car.getBrand());

// let car = {
// 	brand: "Honda",
// 	getBrand: function () {
// 		return this.brand;
// 	},
// };

// let bike = {
// 	brand: "Harley Davidson",
// };

// let brand = car.getBrand.bind(bike);
// console.log(brand());

// function Car(brand) {
// 	this.brand = brand;
// }

// Car.prototype.getBrand = function () {
// 	return this.brand;
// };

// let car = new Car("Honda");
// console.log(car.getBrand());

// var bmw = Car('BMW');
// console.log(bmw.brand);

// function Car(brand) {
// 	if (!(this instanceof Car)) {
// 		throw Error("Must use the new operator to call the function");
// 	}
// 	this.brand = brand;
// }
// function Car(brand) {
// 	if (!new.target) {
// 		throw Error("Must use the new operator to call the function");
// 	}
// 	this.brand = brand;
// }

// function getBrand(prefix) {
// 	console.log(prefix + this.brand);
// }

// let honda = {
// 	brand: "Honda",
// };
// let audi = {
// 	brand: "Audi",
// };

// getBrand.call(honda, "It's a ");
// getBrand.call(audi, "It's an ");
// getBrand.apply(honda, ["It's a "]); // "It's a Honda"
// getBrand.apply(audi, ["It's an "]); // "It's a Audi"
// let person = {
// 	firstName: "John",
// 	lastName: "Doe",
// };
// let firstName = person.firstName;
// let lastName = person.lastName;
// let { firstName: fname, lastName: lname } = person;
// console.log(fname); // 'John'
// console.log(lname); // 'Doe'
// let person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	currentAge: 28,
// };
// person.age = 20;
// let { eyecolor = "brown", middleName = "", currentAge: age = 18 } = person;
// console.log(eyecolor);
// console.log(middleName);
// console.log(age);
// console.log(person);
