//  no error
// let message = "hello";
// message = 123456;
// console.log(message); // 123456


// number data type

// let n = 123;
// n = 12.345;
// console.log(n); // 12.345

// console.log(1 / 0); // Infinity
// console.log(typeof Infinity); // number
// console.log("not a number" / 2);
// console.log(typeof NaN);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof undefined);
// console.log(typeof function name(params) {
     
// });
// console.log(typeof 9);
// console.log(typeof -548919);
// console.log(typeof 9.16);
// console.log( NaN + 1 ); // NaN
// console.log( 3 * NaN ); // NaN
// console.log( "not a number" / 2 - 1 ); // NaN
// console.log(9007199254740991 + 1); // 9007199254740992
// console.log(9007199254740991 + 2); // 9007199254740992
// console.log(9007199254740991 + 3); // 9007199254740992
// console.log(9007199254740991 + 4); // 9007199254740992


// string data type

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;
// console.log(str)
// console.log(str2)
// console.log(phrase)

// let Name = "John";

//  embed a variable
// console.log( `Hello, ${Name}!` ); // Hello, John!

//  embed an expression
// console.log( `the result is ${1 + 2}` ); // the result is 3


// boolean data type

// let nameFieldChecked = true; // yes, name field is checked
// let ageFieldChecked = false; // no, age field is not checked
// console.log(nameFieldChecked)
// console.log(ageFieldChecked)

// let isGreater = 4 > 1;

// console.log( isGreater ); // true (the comparison result is "yes")


// null data type

// let age = null;
// console.log(typeof null)


//  undefined data type

// let age1 = 100;
//  change the value to undefined
// age1 = undefined;
// console.log(age1); // "undefined"


//object

// let user = new Object(); // "object constructor" syntax
// let user1 = {};  // "object literal" syntax

// console.log(typeof user)
// console.log(typeof user1)

// let user = {     // an object
//      name: "John",  // by key "name" store value "John"
//      age: 30        // by key "age" store value 30
//    };

//    console.log(user.name)
//    console.log(user.age)

// let user = {
//      name: "John",
//      age: 30
//    };
   
//    let key = prompt("What do you want to know about the user?");
   
//    // access by variable
//    alert( user[key] ); // John (if enter "name")

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: fruit, // the name of the property is taken from the variable fruit
// };

// alert( bag[fruit] ); // 5 if fruit="apple"


// function makeUser(name, age) {
//      return {
//        name: name,
//        age: age,
//        // ...other properties
//      };
//    }
   
//    let user = makeUser("John", 30);
// let obj = {
//      test: undefined
//    };
   
//    alert( obj.test ); // it's undefined, so - no such property?
   
//    alert( "test" in obj ); // true, the property does exist!


// let user = {
//      name: "John",
//      age: 30,
//      isAdmin: true
//    };
   
//    for (let key in user) {
//      // keys
//      console.log( key );  // name, age, isAdmin
//      // values for the keys
//      console.log( user[key] ); // John, 30, true
//    }



//Type Conversion



//input and output ineractions

// alert("Hello");

// result = prompt("hii");
// alert(result)

// let isTrue = confirm("is this right?")
// alert(isTrue)

// alert("Hello Welcome To My Page")
// let name=prompt("Pls Tell Us Your Name ")
// let isRight=confirm(`You Name Is ${name} ?`)
// alert(isRight)

// let value=true;
// alert(typeof value)
// alert(typeof String(value))

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number

// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );  

// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false

// alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
// alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
// alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16

// alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
// alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

// let s = "my" + "string";
// alert(s); // mystring
// console.log( 1 + '2' ); // "12"
// console.log( 2 + '1' ); // "21"
// console.log(2 + 2 + '1' ); // "41" and not "221"
// console.log('1' + 2 + 2); // "122" and not "14"
// console.log( '6' - '2' ); // 4, converts '2' to a number
// console.log( '6' / '2' ); // 3, converts both operands to numbers
// console.log( '6' * '2' ); // 12, converts both operands to numbers
// No effect on numbers
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// Converts non-numbers
// alert( +true ); // 1
// alert( +"" );   // 0

// let apples = "2";
// let oranges = "3";

//  both values converted to numbers before the binary plus



// alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

// alert( n ); // 14

// let n = 2;

// n *= 3 + 5; // right part evaluated first, same as n *= 8

// alert( n ); // 16

// let counter = 2;
// counter++;        // works the same as counter = counter + 1, but is shorter
// alert( counter ); // 3

// let counter = 2;
// counter--;        // works the same as counter = counter - 1, but is shorter
// alert( counter ); // 1

// alert(++5)
// let counter = 1;
// let a = ++counter; // (*)

// alert(a); // 2

// let a = 1;

// alert(a); // 1

// a++ // (*) changed ++counter to counter++

// alert(a); // 1

// let counter = 0;
// ++counter;
// counter++;
// alert( counter ); // 2, the lines above did the same

// let a = (1 + 2, 3 + 4);

// alert( a ); // 7 (the result of 3 + 4)

// What are the final values of all variables a, b, c and d after the code below?

// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1


// Assignment result
// importance: 3
// What are the values of a and x after the code below?

// let a = 2; //4

// let x = 1 + (a *= 2); //5

// Fix the addition
// importance: 5
// Here’s a code that asks the user for two numbers and shows their sum.

// It works incorrectly. The output in the example below is 12 (for default prompt values).

// Why? Fix it. The result should be 3.

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 12


// What are results of these expressions?

// "" + 1 + 0 //10
// "" - 1 + 0//-1
// true + false //1
// 6 / "3"//2
// "2" * "3"//6
// 4 + 5 + "px"//9px
// "$" + 4 + 5//$45
// "4" - 2//2
// "4px" - 2//NaN
// "  -9  " + 5 //-3
// "  -9  " - 5//-14
// null + 1//1
// undefined + 1//NaN
// " \t \n" - 2//-2



5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null // false
null == "\n0\n" //false
null === +"\n0\n"//false