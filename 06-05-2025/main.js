// let str = `Template literal in ES6`;

// console.log(str); // Template literal in ES6
// console.log(str.length); // 23
// console.log(typeof str); // string
// let strWithBacktick = `Template literals use backticks \` insead of quotes`;
// console.log(strWithBacktick);

// let msg =
// 	"Multiline \n\
// string";

// console.log(msg);
// //Multiline
// //string
// let msg = ["This text", "can", "span multiple lines"].join("\n");
// console.log(msg)
// let p = `This text
// can
// span multiple lines`;
// console.log(p)
// let post = {
// 	title: "JavaScript Template Literals",
// 	excerpt: "Introduction to JavaScript template literals in ES6",
// 	body: "Content of the post will be here...",
// 	tags: ["es6", "template literals", "javascript"],
// };
// let { title, excerpt, body, tags } = post;
// let card = document.getElementById("card")
// let postHtml = `<article>
// <header>
//     <h1>${title}</h1>
// </header>
// <section>
//     <div>${excerpt}</div>
//     <div>${body}</div>
// </section>
// <footer>
//     <ul>
//       ${tags.map((tag) => `<li>${tag}</li>`).join("\n      ")}
//     </ul>
// </footer>`;
// card.append(postHtml)
// let firstName = "John",
// 	lastName = "Doe";

// let greeting = `Hi ${firstName}, ${lastName}`;
// console.log(greeting); // Hi John, Doe
// let price = 8.99,
// 	tax = 0.1;

// let netPrice = `Net Price:$${(price * (1 + tax)).toFixed(2)}`;

// console.log(netPrice); // netPrice:$9.89
// function format(literals, ...substitutions) {
// 	let result = "";

// 	for (let i = 0; i < substitutions.length; i++) {
// 		result += literals[i];
// 		result += substitutions[i];
// 	}
// 	// add the last literal
// 	result += literals[literals.length - 1];
// 	return result;
// }

// let quantity = 9,
// 	priceEach = 8.99,
// 	result = format`${quantity} items cost $${(quantity * priceEach).toFixed(2)}.`;

// console.log(result); // 9 items cost $80.91.
// let add = (x,y) => {
//      return x+y
// }
// console.log(add(10, 20));
// console.log(add instanceof Function); // true
// const greet = name => `Hello, ${name}!`;
// console.log(greet("Alice"));
// const odd = [1, 3, 5];
// const combined = [2, 4, 6, ...odd];
// console.log(combined);
// function f(a, b, ...args) {
// 	console.log(args);
// }
// f(1, 2, 3, 4, 5);
// const odd = [1, 3, 5];
// const combined = [2, ...odd, 4, 6];
// console.log(combined);
// let rivers = ["Nile", "Ganges", "Yangte"];
// let moreRivers = ["Danube", "Amazon"];

// [].push.apply(rivers, moreRivers);
// console.log(rivers);
// let initialChars = ['A', 'B'];
// let chars = [...initialChars, 'C', 'D'];
// console.log(chars); // ["A", "B", "C", "D"]
// let numbers = [1, 2];
// let moreNumbers = [3, 4];
// let allNumbers = [...numbers, ...moreNumbers];
// console.log(allNumbers); // [1, 2, 3, 4]
// let scores = [80, 70, 90];
// let copiedScores = [...scores];
// console.log(copiedScores); // [80, 70, 90]
// let chars = ['A', ...'BCEFGH', 'D'];
// console.log(chars); // ["A", "B", "C", "D"]
// function say(message = "Hi") {
// 	console.log(message);
// }

// say(); // 'Hi'
// say("Hello"); // 'Hello'
// function say(message) {
//     message = typeof message !== 'undefined' ? message : 'Hi';
//     console.log(message);
// }
// say(); // 'Hi'
// function say(message = "Hi") {
// 	console.log(message);
// }

// say(); // 'Hi'
// say(undefined); // 'Hi'
// say("Hello"); // 'Hello'
// function createDiv(
// 	height = "100px",
// 	width = "100px",
// 	border = "solid 1px red"
// ) {
// 	let div = document.createElement("div");
// 	div.style.height = height;
// 	div.style.width = width;
// 	div.style.border = border;
// 	document.body.appendChild(div);
// 	return div;
// }
// createDiv()
// createDiv(undefined, undefined, "solid 5px blue");
// function put(toy, toyBox = []) {
// 	toyBox.push(toy);
// 	return toyBox;
// }

// console.log(put("Toy Car"));
// // -> ['Toy Car']
// console.log(put("Teddy Bear"));
// // -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']
// function date(d = today()) {
// 	console.log(d);
// }
// function today() {
// 	return new Date().toLocaleDateString("en-US");
// }
// date();
// function requiredArg() {
//    throw new Error('The argument is required');
// }
// function add(x = requiredArg(), y = requiredArg()){
//    return x + y;
// }

// add(10); // error
// add(10, 20); // OK
// function add(x = 1, y = x, z = x + y) {
// 	return x + y + z;
// }

// console.log(add()); // 4
// function subtract(x = y, y = 1) {
// 	return x - y;
// }
// subtract(10);
// let taxRate = () => 0.1;
// let getPrice = function (price, tax = price * taxRate()) {
// 	return price + tax;
// };

// let fullPrice = getPrice(100);
// console.log(fullPrice); // 110
// function add(x, y = 1, z = 2) {
// 	console.log(arguments.length);
// 	return x + y + z;
// }

// add(10); // 1
// add(10, 20); // 2
// add(10, 20, 30); // 3
// let scores = [80, 90, 70];

// for (let score of scores) {
// 	score = score + 5;
// 	console.log(score);
// }
// let colors = ["Red", "Green", "Blue"];

// for (const [index, color] of colors.entries()) {
// 	console.log(`${color} is at index ${index}`);
// }
// const ratings = [
//     {user: 'John',score: 3},
//     {user: 'Jane',score: 4},
//     {user: 'David',score: 5},
//     {user: 'Peter',score: 2},
// ];

// let sum = 0;
// for (const { score }  of ratings) {
//      console.log(score)
//     sum += score;
// }

// console.log(`Total scores: ${sum}`); // 14
// let str = "abc";
// for (let c of str) {
// 	console.log(c);
// }
// let colors = new Map();

// colors.set("red", "#ff0000");
// colors.set("green", "#00ff00");
// colors.set("blue", "#0000ff");

// for (let color of colors) {
// 	console.log(color);
// }
// let nums = new Set([1, 2, 3]);

// for (let num of nums) {
// 	console.log(num);
// }
// let person = {
// 	firstName: "John",
// 	lastName: "Doe",
// };
// // let firstName = person.firstName;
// // let lastName = person.lastName;
// let { firstName: fname, lastName: lname } = person;
// console.log(fname,lname)
// let { property1: variable1, property2: variable2 } = object;
// let person = {
// 	firstName: "John",
//      lastName: "Doe",
//      middleName:"C",
// 	currentAge: 28,
// };

// let { firstName, lastName, middleName = "", currentAge: age = 18 } = person;

// console.log(middleName); // ''
// console.log(age); // 28
// let employee = {
// 	id: 1001,
// 	name: {
// 		firstName: "John",
// 		lastName: "Doe",
// 	},
// };
// let {
// 	name: { firstName, lastName },
// 	name1,
// } = employee;

// console.log(firstName); // John
// console.log(lastName); // Doe
// console.log(name1);
// function getUser(id) {
// 	if (id <= 0) {
// 		return null;
// 	}

// get the user from database
// and return null if id does not exist
// ...

// if user was found, return the user
// 	return {
// 		id: id,
// 		username: "admin",
// 		profile: {
// 			avatar: "/avatar.png",
// 			language: "English",
// 		},
// 	};
// }
// let defaultProfile = { default: "/default.png", language: "English" };

// let user = getUser(2);
// let profile = user?.profile ?? defaultProfile;
// console.log(profile)
// let file = {
// 	read() {
// 		return "file content";
// 	},
// 	write(content) {
// 		console.log(`Writing ${content} to file...`);
// 		return true;
// 	},
// };
// function getUser(id, callback) {
// 	// get user
// 	// ...

// 	let user = {
// 		id: id,
// 		username: "admin",
// 	};

// 	// test if the callback exists
// 	callback?.(user);

// 	return user;
// }
// getUser()
// value1 ?? value2;
// const name = null ?? 'John';
// console.log(name); // 'John'
// const age = undefined ?? 28;
// console.log(age);
// let count = 0;
// let result = 0 || 1;
// let result = 1 ?? console.log("Hi");
// console.log(result)
