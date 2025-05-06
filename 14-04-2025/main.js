// console.log("Start");
// nonExistentFunction(); // This will crash the code
// console.log("End"); // ❌ This won't run

// try {
//   nonExistentFunction();
// } catch (error) {
//   console.log("Caught an error:", error.message);
// }
// console.log("End"); // ✅ Still runs

// try {
//      a(10)
//     console.log(a)
// }
// catch (err) {
//      console.log(err)
// }

// try {
//      let a = 10
//      let b = a.toUpperCase()
// }
// catch (err) {
//      console.log("Error Caught",err)
// }

// try {
//      let jsonData = '{"name":"john"}'
//      let user = JSON.parse(jsonData)
//      console.log(user.name)
// }
// catch (err) {
//      console.log("error",err.message)
// }

// try {
// 	console.log("Trying something risky");
// 	throw new Error("Oops!");
// } catch (e) {
// 	console.log("Caught:", e.message);
// } finally {
// 	console.log("This always runs.");
// }
// let arr = [
// 	1,
// 	3,
// 	"Test",
// 	0,
// 	"",
// 	" ",
// 	-1,
// 	null,
// 	undefined,
// 	"Hello World",
// 	"hello",
// 	"workd",
// 	54,
// 	false,
// 	true,
// 	"-0",
// 	"null",
// 	28,
// ];

// Get all NAN values :
// output: ['Test', ' ', undefined, 'Hello World', 'hello', 'workd', 'null']
// let nana = isNaN(undefined);
// console.log(nana)
// let nan = arr.filter((x) => {
//      return (isNaN(x))
// });
// console.log(nan);
// let a = " "
// let b = 2
// console.log(a*b)
// try {
// 	console.log("Trying something risky");
// 	throw new Error("Oops!");
// } catch (e) {
// 	console.log("Caught:", e.message);
// } finally {
// 	console.log("This always runs.");
// }
// function divide(a, b) {
// 	if (b === 0) {
// 		throw new Error("Cannot divide by zero!");
// 	}
// 	return a / b;
// }

// try {
// 	console.log(divide(10,0)); // ❌ Will throw
// } catch (e) {
// 	console.log("Error:", e.message);
// }
// let error = new Error("This is a general error");
// console.log(error.name);    // Error
// console.log(error.message); // This is a general error
// try {
// 	console.log(a); // a is not defined
// } catch (err) {
// 	console.log(err.name); // ReferenceError
// 	console.log(err.message); // a is not defined
// }
// try {
// 	null.f(); // You can’t call a function on null
// } catch (err) {
// 	console.log(err.name); // TypeError
// 	console.log(err.message); // Cannot read properties of null
// }
// try {
// 	eval("var a = "); // Incomplete JS
// } catch (err) {
// 	console.log(err.name); // SyntaxError
// }

// function parseJSON(str) {
// 	try {
// 		console.log(JSON.parse(str));
// 		throw new Error("Invalid JSON: <error message>");
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// }

// parseJSON('{"name": "Avi"}'); // ✅ Should parse
// parseJSON('{name: "Avi"}'); // ❌ Should show error

// function getSquareRoot(x) {
// 	if (x < 0) {
// 		throw new Error("x is nagative");
// 	}

// 	return Math.sqrt(x);
// }

// try {
// 	console.log(getSquareRoot(9)); // 3
// 	console.log(getSquareRoot(-1)); // ❌ Error: Negative number not allowed
// } catch (e) {
// 	console.log("Error:", e.message);
// }

// function calculate(a, b, c) {
// 	let result;
// 	try {
// 		if (c == "+") {
// 			result = a + b;
// 			throw new Error(result);
// 		} else if (c == "/") {
// 			if (b == 0) {
// 				throw new Error("Cannot divide by zero");
// 			} else {
// 				result = a / b;
// 			}
// 		} else if (c == "*") {
// 			if (a || b >= 0) result = a * b;
// 			else {
// 				throw new Error("Inputs must be numbers");
// 			}
// 		} else {
// 			if (a||b>=0) {
// 				result = a % b;
// 			} else {
// 				throw new Error(" Invalid operato");
// 			}
// 		}
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// 	return result;
// }

// console.log(calculate(10, 2, "+")); // 12
// console.log(calculate(10, 0, "/")); // ❌ Error: Cannot divide by zero
// calculate(10, 2, "*"); // ❌ Error: Inputs must be numbers
// calculate(10, 2, "%"); // ❌ Error: Invalid operato
