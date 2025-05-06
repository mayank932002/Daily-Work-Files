// function declaration

// function showMessage() {
//      alert( 'Hello everyone!' );
//    }

//    showMessage() // this is function calling

// function showMessage() {
//      let message = "Hello, I'm JavaScript!"; // local variable
//      alert( message );
//    }

//    showMessage(); // Hello, I'm JavaScript!

//    alert( message ); // <-- Error! The variable is local to the function

// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// showMessage(); // Hello, John

// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); // John before the function call

// showMessage();

// alert( userName ); // Bob, the value was modified by the function

// let userName = "John";

// function showMessage() {
// 	let userName = "Bob"; // declare a local variable

// 	let message = "Hello, " + userName; // Bob
// 	alert(message);
// }

// // the function will create and use its own userName
// showMessage();

// alert(userName);

// function showMessage(from, text) { // parameters: from, text
//      alert(from + ': ' + text);
//    }

//   showMessage("hello",'mayank')
//   showMessage('hello','mayank1')

// function addition(num1,num2){
//      alert(num1+num2)
// }
// addition(10,20)
// addition(200,300)

// function showMessage(from, text) {
// 	from = "*" + from + "*"; // make "from" look nicer

// 	alert(from + ": " + text);
// }

// let from = "Ann";

// showMessage(from, "Hello"); // *Ann*: Hello

// // the value of "from" is the same, the function modified a local copy
// alert(from); // Ann

// function showMessage(from, text = "no text given") {
// 	alert(from + ": " + text);
// }

// showMessage("Ann", "this is you text"); // Ann: no text given
// function showCount(count) {
//   // if count is undefined or null, show "unknown"
//   console.log(count ?? "unknown");
// }
// showCount(0); // 0
// showCount(null); // unknown
// showCount(); // unknown

// function sum(a,b){
//   return a+b
// }
// let result = sum(50,80)
// console.log(result)

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//   alert( 'Access granted' );
// } else {
//   alert( 'Access denied' );
// }

// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
// }
// function showOk(){
//   alert("you agreed")
// }
// function showCancel(){
//   alert("You cancelled the execution")
// }
// ask("Do you Agree?",showOk,showCancel)

// function sum(a, b) {
//   c= a + b;
//   return c
// }
// sum(1, 2)
// let result = c;
// alert( result ); // 3

// function createBankAccount(initialBalance) {
// 	let balance = initialBalance;

// 	return {
// 		deposit(amount) {
// 			balance += amount;
// 			console.log(`Deposited: $${amount}, New Balance: $${balance}`);
// 		},
// 		withdraw(amount) {
// 			if (amount > balance) {
// 				console.log("Insufficient funds!");
// 			} else {
// 				balance -= amount;
// 				console.log(`Withdrew: $${amount}, New Balance: $${balance}`);
// 			}
// 		},
// 	};
// }

// const myAccount = createBankAccount(100);
// myAccount.deposit(50); // Output: Deposited: $50, New Balance: $150
// myAccount.withdraw(30); // Output: Withdrew: $30, New Balance: $120
// console.log(myAccount.balance); // ❌ Error: balance is private (not accessible)

// function counter() {
//   let count = 0;  // count is in the function scope

//   return function () {
//       count++;  // Inner function remembers 'count'
//       console.log(count);
//   };
// }

// const increment = counter();  // Returns the inner function

// increment();  // Output: 1
// increment();  // Output: 2
// increment();  // Output: 3

// function outer() {
//   let outerVar = "I'm from outer function";

//   function inner() {
//       console.log(outerVar);  // ✅ Inner function can access outerVar
//   }

//   inner();
// }

// outer();  // Output: I'm from outer function
// console.log(outerVar);  // ❌ Error: outerVar is not defined

// function greet() {
//   let message = "Hello, World!";
//   console.log(message);  // ✅ Accessible inside function
// }

// greet();
// console.log(message);  // ❌ Error: message is not defined (out of scope)

// function add(a, b) {
//   return a + b;  // Function returns sum of a and b
// }

// let result = add(5, 3);
// console.log(result);  // Output: 8

// function sayHello(name) {
//   console.log("Hello, " + name + "!");
// }

// let message = sayHello("Alice");
// console.log(message);  // Output: undefined

// function getCoordinates() {
//   return [10, 20];  // Returns an array
// }

// let [x, y] = getCoordinates();
// console.log(x, y);  // Output: 10 20

// function multiplier(factor) {
//   return function (number) {
//       return number * factor;
//   };
// }

// const double = multiplier(2);
// console.log(double(5));  // Output: 10

// function checkNumber(num) {
//   if (num > 0) return "Positive";
//   if (num < 0) return "Negative";
//   return "Zero";  // Only executes if num is not > 0 or < 0
// }

// console.log(checkNumber(5));  // Output: Positive
// console.log(checkNumber(-3)); // Output: Negative
// console.log(checkNumber(0));  // Output: Zero

// function one() {
// 	let a = 5;

// 	console.log(a);
// }
