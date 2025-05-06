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
