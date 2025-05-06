// if(let result;

//      if (a + b < 4) {
//        result = 'Below';
//      } else {
//        result = 'Over';
//      })

// let year = prompt('In which year was ECMAScript-2015 specification published?', '');

//  if (year == 2015) alert( 'You are right!' );

// if (year == 2015) {
//      alert( "That's correct!" );
//      alert( "You're so smart!" );
//    }

// let age = 20;

// if (age >= 18) {
//   console.log('You can sign up.');
// } else {
//   console.log('You must be at least 18 to sign up.');
// }

// let age = 16;
// let country = 'USA';

// if (age >= 16 && country === 'USA') {
//   console.log('You can get a driving license.');
// } else {
//   console.log('You are not eligible to get a driving license.');
// }

// let month = 10;
// let monthName;

// if (month == 1) {
//   monthName = 'Jan';
// } else if (month == 2) {
//   monthName = 'Feb';
// } else if (month == 3) {
//   monthName = 'Mar';
// } else if (month == 4) {
//   monthName = 'Apr';
// } else if (month == 5) {
//   monthName = 'May';
// } else if (month == 6) {
//   monthName = 'Jun';
// } else if (month == 7) {
//   monthName = 'Jul';
// } else if (month == 8) {
//   monthName = 'Aug';
// } else if (month == 9) {
//   monthName = 'Sep';
// } else if (month == 10) {
//   monthName = 'Oct';
// } else if (month == 11) {
//   monthName = 'Nov';
// } else if (month == 12) {
//   monthName = 'Dec';
// } else {
//   monthName = 'Invalid month';
// }
// console.log(monthName);

// let weight = 70; // kg
// let height = 1.72; // meter

// // calculate the body mass index (BMI)
// let bmi = weight / (height * height);

// let weightStatus;

// if (bmi < 18.5) {
//   weightStatus = 'Underweight';
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   weightStatus = 'Healthy Weight';
// } else if (bmi >= 25 && bmi <= 29.9) {
//   weightStatus = 'Overweight';
// } else {
//   weightStatus = 'Obesity';
// }

// console.log(weightStatus);

// let age = 18;
// let message;

// age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

// console.log(message);

// let authenticated = false;
// let nextURL = authenticated
//   ? (alert('You will redirect to admin area'), '/admin')
//   : (alert('Access denied'), '/403');

// // redirect to nextURL here
// console.log(nextURL); // '/admin'

// let locked = 0;
// let canChange = locked != 1 ? true : false;
// console.log(canChange)

// let speed = 200;
// let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

// console.log(message);

// switch (2) {
// 	case val1:
// 		statment1;
// 		break;
// 	case val2:
//           statment2;
//           break;
//      case 3:
//           statment3;
//           break;
// }
// let day = 2;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = 'Sunday';
//     break;
//   case 2:
//     dayName = 'Monday';
//     break;
//   case 3:
//     dayName = 'Tuesday';
//     break;
//   case 4:
//     dayName = 'Wednesday';
//     break;
//   case 5:
//     dayName = 'Thursday';
//     break;
//   case 6:
//     dayName = 'Friday';
//     break;
//   case 7:
//     dayName = 'Saturday';
//     break;
//   default:
//     dayName = 'Invalid day';
// }

// console.log(dayName); // Tuesday

// let year = 2024;
// let month = 2;
// let dayCount;

// switch (month) {
// 	case 1:
// 	case 3:
// 	case 5:
// 	case 7:
// 	case 8:
// 	case 10:
// 	case 12:
// 		dayCount = 31;
// 		break;
// 	case 4:
// 	case 6:
// 	case 9:
// 	case 11:
// 		dayCount = 30;
// 		break;
// 	case 2:
// 		// leap year
// 		if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
// 			dayCount = 29;
// 		} else {
// 			dayCount = 28;
// 		}
// 		break;
// 	default:
// 		dayCount = -1; // invalid month
// }

// console.log(dayCount); // 29
// debugger
// let que = prompt("Who is there?");
// console.log(que)
// if (que == "admin") {
// 	let pass = prompt("Please Enter Password");
// 	if (pass == "master") {
// 		alert("welcome");
// 	} else if (pass == null) {
// 		alert("cancelled");
// 	} else {
// 		alert("wrong password");
// 	}
// } else if ((que = confirm)) {
// 	alert("cancelled");
// } else {
// 	alert("i don't know you");
// }


// let i = 1;
// while (i<10) { // when i becomes 0, the condition becomes falsy, and the loop stops
// console.log(i)
//   i++;
// }
// let i = 10;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
// console.log(i)
//   i--;
// }
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <=30);

// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//      console.log(i);
//    }

// for (let i = 0; i < 3; i++) alert(i)

// run begin
// let i = 0
// // if condition → run body and run step
// if (i < 3) { alert(i); i++ }
// // if condition → run body and run step
// if (i < 3) { alert(i); i++ }
// // if condition → run body and run step
// if (i < 3) { alert(i); i++ }
// // ...finish, because now i == 3
// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// console.log( 'Sum: ' + sum );