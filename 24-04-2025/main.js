//async-await
//what problem it solves?
//1.callbacks
//2.settimeout
//3.promise

// function test() {
// 	console.log("this is test func");
// }
// function doThis(callback) {
// 	callback();
// }
// doThis(test);

// setTimeout(() => {
// 	test();
// }, 2000);

// Promise.resolve.then()
// function fakeAxios() {
// 	return new Promise(function (resolve) {
// 		setTimeout(() => {
// 			resolve("Data Received");
// 		}, 3000);
// 	});
// }
// console.log(1)
// function test() {
//   console.log(2)
// }
// test()
// fakeAxios().then ((data) => {
//   console.log(data)
// })

// async function getData() {
//   const data = await 5;
//   console.log(data)
// }
// getData()

// (function () {
// 	const data = 6;
// 	console.log(data);
// })();
// console.log("Outside");
// let btn = document.getElementById("button");

// console.log(name);
// var name = "mayank1";
// var num = 5;
// function cb() {
// 	console.log(this.num);
// }

// const object = {
// 	num: 6,
// 	method(callback) {
// 		callback();
// 	},
// };

// console.log(object.method(cb()));

//basic callback

// function fetchData(cb) {
// 	console.log("Fetching data....");
// 	//delay with setTimeout
// 	setTimeout(() => {
// 		const data = {
// 			id: 1,
// 			name: "mayank",
// 		};
// 		cb(data);
// 	}, 5000);
// }
// fetchData((data) => {
// 	console.log("Data Recived :", data);
// 	console.log("ID", data.id);
// 	console.log("Name", data.name);
// });
// console.log("This runs before the callback executes!");

// Callback hell (nested callbacks)
// function getUserData(userId, callback) {
// 	console.log(`Fetching user data for ID: ${userId}...`);
// 	setTimeout(() => {
// 		const userData = { id: userId, name: "John Doe" };
// 		callback(userData);
// 	}, 1000);
// }
// function getUserPosts(userId, callback) {
// 	console.log(`Fetching posts for user ID: ${userId}...`);
// 	setTimeout(() => {
// 		const posts = ["Post 1", "Post 2", "Post 3"];
// 		callback(posts);
// 	}, 1000);
// }

// function getPostComments(postId, callback) {
// 	console.log(`Fetching comments for post: ${postId}...`);
// 	setTimeout(() => {
// 		const comments = ["Comment 1", "Comment 2"];
// 		callback(comments);
// 	}, 1000);
// }

// getUserData(123, (user) => {
// 	console.log("User:", user);
// 	getUserPosts(user.id, (posts) => {
// 		console.log("Posts:", posts);
// 		getPostComments(posts[0], (comments) => {
// 			console.log("Comments:", comments);
// 		});
// 	});
// });

//basic Promise example
// function fetchUserData(userId) {
// 	return new Promise((resolve, reject) => {
// 		console.log(`Fetching data for User ${userId}`);
// 		setTimeout(() => {
// 			if (userId > 0) {
// 				const userData = {
// 					id: userId,
// 					name: "Mayank",
// 				};
// 				resolve(userData); //Success Case
// 			} else {
// 				reject("Invalide User ID"); //Error Case
// 			}
// 		}, 2000);
// 	});
// }

// //Using the Promise With then,catch and finally

// fetchUserData(123)
// 	.then((user) => {
// 		console.log("User data received:", userData);
// 		return userData.name;
// 	})
// 	.then((name) => {
// 		console.log("User name:", name);
// 	})
// 	.catch((e) => {
// 		console.log("Error Occurred:", e.message);
// 	})
// 	.finally(() => {
// 		console.log("Opration completed ");
// 	});
// console.log("this runs before promise resolves!");

// //promise chaining

// fetchUserData(123)
// 	.then((user) => {
// 		console.log("User:", user);
// 		return fetchUserPosts(user.id);
// 	})
// 	.then((posts) => {
// 		console.log("Posts:", posts);
// 		return fetchPostComments(posts[0]); // Return another promise
// 	})
// 	.then((comments) => {
// 		console.log("Comments:", comments);
// 	})
// 	.catch((error) => {
// 		// This will catch errors from any of the promises in the chain
// 		console.error("Error in promise chain:", error.message);
// 	});

// const promise1 = Promise.resolve("First");
// const promise2 = new Promise((res) => {
// 	setTimeout(() => {
// 		res("Second");
// 	}, 1000);
// });
// const promise3 = Promise.resolve("Third");

// Promise.all([promise1, promise2, promise3]).then((val) => {
// 	console.log("All promise resolved", val);
// });

// Promise.race([
// 	new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve("Fast");
// 		}, 1000);
// 	}),
// 	new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve("Slow");
// 		}, 2000);
// 	}),
// ]).then((result) => {
//      console.log("Fastest promise result",result)
// })

// Promise.allSettled([Promise.resolve("Success"), Promise.reject("Failed"), Promise.resolve("Another Success")]).then((result) => {
//      console.log(("All setteled results",result))
// })
// Basic async/await example
// async function getUserData() {
//   console.log("Starting async function...");

//   // The await keyword pauses execution until the promise resolves
//   const response = await new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Alice Johnson" });
//     }, 2000);
//   });

//   console.log("After await - promise resolved!");
//   return response; // This is automatically wrapped in a Promise
// }

// // Using an async function
// console.log("Before calling async function");

// getUserData()
//   .then(data => {
//     console.log("User data:", data);
//   });

// console.log("After calling async function (but before it completes)");

// Output:
// Before calling async function
// Starting async function...
// After calling async function (but before it completes)
// (after 2 seconds)
// After await - promise resolved!
// User data: { id: 1, name: 'Alice Johnson' }
// Helper functions that return promises
// function fetchUser(id) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve({ id, name: `User ${id}` }), 1000);
//   });
// }

// function fetchPosts(userId) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve([`Post 1 by ${userId}`, `Post 2 by ${userId}`]), 1000);
//   });
// }

// // Sequential execution (each await waits for the previous one)
// async function fetchUserDataSequential() {
//   console.time("Sequential");

//   const user = await fetchUser(1);
//   console.log("User:", user);

//   const posts = await fetchPosts(user.id);
//   console.log("Posts:", posts);

//   console.timeEnd("Sequential");
//   return { user, posts };
// }

// // Parallel execution (start both promises at the same time)
// async function fetchUserDataParallel() {
//   console.time("Parallel");

//   // Start both promises immediately (don't await yet)
//   const userPromise = fetchUser(1);
//   const postsPromise = fetchPosts(1);

//   // Now await both promises
//   const user = await userPromise;
//   const posts = await postsPromise;

//   console.log("User (parallel):", user);
//   console.log("Posts (parallel):", posts);

//   console.timeEnd("Parallel");
//   return { user, posts };
// }

// // Run both functions
// fetchUserDataSequential().then(() => {
//   console.log("Sequential operation complete");
//   fetchUserDataParallel().then(() => {
//     console.log("Parallel operation complete");
//   });

// });

// Output:
// User: { id: 1, name: 'User 1' }
// Posts: [ 'Post 1 by 1', 'Post 2 by 1' ]
// Sequential: ~2000ms (1000ms + 1000ms)
// Sequential operation complete
// User (parallel): { id: 1, name: 'User 1' }
// Posts (parallel): [ 'Post 1 by 1', 'Post 2 by 1' ]
// Parallel: ~1000ms (both requests run simultaneously)
// Parallel operation complete

// Error handling with callbacks
// function fetchWithCallback(url, successCallback, errorCallback) {
// 	setTimeout(() => {
// 		if (url.includes("success")) {
// 			successCallback("Data from " + url);
// 		} else {
// 			errorCallback(new Error("Failed to fetch " + url));
// 		}
// 	}, 1000);
// }

// fetchWithCallback(
// 	"api/success",
// 	(data) => console.log("Callback success:", data),
// 	(error) => console.error("Callback error:", error.message)
// );

// fetchWithCallback(
// 	"api/failure",
// 	(data) => console.log("Callback success:", data),
// 	(error) => console.error("Callback error:", error.message)
// );

// Error handling with promises
// function fetchWithPromise(url) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (url.includes("success")) {
// 				resolve("Data from " + url);
// 			} else {
// 				reject(new Error("Failed to fetch " + url));
// 			}
// 		}, 1000);
// 	});
// }

// fetchWithPromise("api/success")
// 	.then((data) => console.log("Promise success:", data))
// 	.catch((error) => console.error("Promise error:", error.message));

// fetchWithPromise("api/failure")
// 	.then((data) => console.log("Promise success:", data))
// 	.catch((error) => console.error("Promise error:", error.message));

// // Error handling with async/await
// async function fetchData(url) {
// 	try {
// 		const result = await fetchWithPromise(url);
// 		console.log("Async/await success:", result);
// 	} catch (error) {
// 		console.error("Async/await error:", error.message);
// 	}
// }

// // Call the async function with different URLs
// fetchData("api/success");
// fetchData("api/failure");

// const usersSalaryData = [
// 	{ name: "Amit Sharma", salary: 65000 },
// 	{ name: "Priya Mehta", salary: 72000 },
// 	{ name: "Amit Sharma", salary: 55000 },
// 	{ name: "Ravi Kumar", salary: 58000 },
// 	{ name: "Priya Mehta", salary: 63000 },
// 	{ name: "Sneha Reddy", salary: 75000 },
// 	{ name: "Ravi Kumar", salary: 47000 },
// ];

// const a = usersSalaryData.reduce((result, current) => {
//      const b = result.find((person) => person.name === current.name);
//      console.log(b)

// 	if (b) {
// 		b.salary += current.salary;
// 	} else {
// 		result.push({ name: current.name, salary: current.salary });
// 	}

// 	return result;
// }, []);

// console.log("Old Data:",usersSalaryData);
// console.log("New data",a);

//Basic Fetch API syntax

// fetch(url).then(res=>res.json()).then(data=>console.log(data)).catch(error=>console.log("Error:",error))

//Simple GET request

// fetch("https://student-api.mycodelibraries.com/api/student/get")
// 	.then((res) => {
// 		if (!res.ok) {
// 			throw new Error("Network response was not ok");
// 		} else {
// 			return res.json();
// 		}
// 	})
// 	.then((data) => {
// 		console.log("Success:", data);
// 	})
// 	.catch((e) => {
// 		console.log("Error:", e);
// 	});

// // POST request with JSON data
// //https:student-api.mycodelibraries.com/api/student/add
// fetch("https:student-api.mycodelibraries.com/api/student/add", {
// 	method: "POST",
// 	headers: {
// 		"content-type": "application/json",
// 	},
// 	body: JSON.stringify({
// 		firstName: "Mayank",
// 		lastName: "Patel",
// 		age: 22,
// 		hobbies: "Reading,Exersice",
// 		gender: "Male",
// 		city: "Surat",
// 	}),
// })
// 	.then((response) => response.json())
// 	.then((data) => console.log("Success:", data))
// 	.catch((error) => console.error("Error:", error));

// // PUT request to update a resource
// const updatedStudent = {
// 	name: "Jane Doe",
// 	age: 21,
// 	grade: "A+",
// };

// fetch("https://student-api.mycodelibraries.com/api/students/update", {
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify(updatedStudent),
// })
// 	.then((response) => response.json())
// 	.then((data) => console.log("Student updated:", data))
// 	.catch((error) => console.error("Error updating student:", error));

// // DELETE request
// fetch("https://api.example.com/data/1", {
// 	method: "DELETE",
// })
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error("Failed to delete resource");
// 		}
// 		return response.json();
// 	})
// 	.then((data) => console.log("Resource deleted:", data))
// 	.catch((error) => console.error("Error deleting resource:", error));
// fetch("https://api.example.com/data")
// 	.then((response) => {
// 		// Check if the request was successful
// 		if (!response.ok) {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 		}
// 		return response.json();
// 	})
// 	.then((data) => console.log("Data:", data))
// 	.catch((error) => console.error("Error:", error));

// Parsing JSON
// fetch("https://api.example.com/data")
// 	.then((response) => response.json())
// 	.then((data) => console.log("JSON data:", data));

// // Parsing text
// fetch("https://api.example.com/text")
// 	.then((response) => response.text())
// 	.then((text) => console.log("Text:", text));

// // Handling binary data (Blob)
// fetch("https://api.example.com/image.jpg")
// 	.then((response) => response.blob())
// 	.then((blob) => {
// 		const imageUrl = URL.createObjectURL(blob);
// 		const imgElement = document.createElement("img");
// 		imgElement.src = imageUrl;
// 		document.body.appendChild(imgElement);
// 	});

// // Handling form data
// fetch("https://api.example.com/form-data")
// 	.then((response) => response.formData())
// 	.then((formData) => {
// 		console.log("Form data:", formData.get("field1"));
// 	});
// fetch("https://api.example.com/data")
// 	.then((response) => {
// 		console.log("Status:", response.status); // e.g., 200
// 		console.log("Status Text:", response.statusText); // e.g., "OK"
// 		console.log("Content-Type:", response.headers.get("Content-Type"));

// 		// Check if response was successful
// 		if (response.ok) {
// 			return response.json();
// 		} else {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 		}
// 	})
// 	.then((data) => console.log("Data:", data))
// 	.catch((error) => console.error("Error:", error));
// fetch("https://api.example.com/data", {
// 	headers: {
// 		"Content-Type": "application/json",
// 		Authorization: "Bearer YOUR_TOKEN_HERE",
// 		Accept: "application/json",
// 		"X-Custom-Header": "CustomValue",
// 	},
// })
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));

// fetch("https://api.example.com/data", {
// 	method: "POST", // *GET, POST, PUT, DELETE, etc.
// 	mode: "cors", // no-cors, *cors, same-origin
// 	cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
// 	credentials: "same-origin", // include, *same-origin, omit
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	redirect: "follow", // manual, *follow, error
// 	referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, etc.
// 	body: JSON.stringify({ key: "value" }), // body data type must match "Content-Type" header
// })
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));
// Create an AbortController instance
// const controller = new AbortController();
// const signal = controller.signal;

// // Start the fetch request
// fetch("https://api.example.com/data", { signal })
// 	.then((response) => response.json())
// 	.then((data) => console.log("Data:", data))
// 	.catch((error) => {
// 		if (error.name === "AbortError") {
// 			console.log("Fetch request was aborted");
// 		} else {
// 			console.error("Error:", error);
// 		}
// 	});

// // Abort the request after 5 seconds
// setTimeout(() => {
// 	controller.abort();
// 	console.log("Fetch aborted");
// }, 5000);

// async function fetchData() {
// 	try {
// 		const response = await fetch("https://api.example.com/data");

// 		if (!response.ok) {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 		}

// 		const data = await response.json();
// 		console.log("Data:", data);
// 		return data;
// 	} catch (error) {
// 		console.error("Error fetching data:", error);
// 	}
// }

// // Call the function
// fetchData();
