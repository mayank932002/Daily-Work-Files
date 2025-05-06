//***********************************************************
// Math methods and functions //***********************************************************

// You use Math directly, not with "new"
// console.log(Math.PI)

//*********************************************************** */

//Math.PI
// This represents the ratio of a circle's circumference to its diameter (approximately 3.14159).

// Calculate area of a circle
// const radius = 10;
// const area = Math.PI * radius * radius;
// console.log(area);

// // Calculate circumference of a circle
// const circumference = 2 * Math.PI * radius;
// console.log(circumference);

// // Real-world example: Calculating wheel rotation distance
// function distancePerRotation(wheelDiameter) {
// 	return Math.PI * wheelDiameter;
// }
// console.log(distancePerRotation(26));

//*********************************************************** */

//Math.E
// This represents Euler's number (approximately 2.718), the base of natural logarithms.

// Continuous compound interest
// function continuousCompoundIntrest(principal, rate, time) {
// 	return principal * Math.pow(Math.E, rate * time);
// }
// console.log(continuousCompoundIntrest(1000, 0.05, 1));

// // Probability distribution (normal distribution)
// function normalPDF(x, mean = 0, stdDev = 1) {
// 	const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2));
// 	return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.pow(Math.E, exponent);
// }
// console.log(normalPDF(0))

//*********************************************************** */
// Math.LN2
// Natural logarithm of 2 (approximately 0.693).
// console.log(Math.LN2); // 0.6931471805599453

// // Calculate time for value to double at given growth rate
// function timeToDouble(growthRate) {
// 	return Math.LN2 / growthRate;
// }
// console.log(timeToDouble(0.05)); // 13.86 years at 5% growth rate

// // Converting between bases in logarithms
// function log2(x) {
// 	return Math.log(x) / Math.LN2;
// }
// console.log(log2(8)); // 3

//*********************************************************** */

// Math.LN10
// Natural logarithm of 10 (approximately 2.303).

// console.log(Math.LN10); // 2.302585092994046

// // Convert natural log to base-10 log
// function log10(x) {
// 	return Math.log(x) / Math.LN10;
// }
// console.log(log10(100)); // 2

// // Calculate number of digits in a number
// function approximateDigits(number) {
// 	return Math.floor(Math.log(number) / Math.LN10) + 1;
// }
// console.log(approximateDigits(12345)); // 5

//*********************************************************** */

// Math.LOG2E
// Base-2 logarithm of E (approximately 1.442).

// console.log(Math.LOG2E); // 1.4426950408889634

// // Convert natural log to base-2 log
// function log2FromNatural(naturalLog) {
// 	return naturalLog * Math.LOG2E;
// }
// console.log(log2FromNatural(Math.log(8))); // 3

//*********************************************************** */

// Math.LOG10E
// Base-10 logarithm of E (approximately 0.434).

// console.log(Math.LOG10E); // 0.4342944819032518

// // Convert natural log to base-10 log
// function log10FromNatural(naturalLog) {
// 	return naturalLog * Math.LOG10E;
// }
// console.log(log10FromNatural(Math.log(100))); // 2

//*********************************************************** */

// Math.SQRT1_2
// Square root of 1/2 (approximately 0.707).
// console.log(Math.SQRT1_2); // 0.7071067811865476

// // Normalize a vector to 45 degrees
// function normalize45Degrees(x, y) {
// 	return [x * Math.SQRT1_2, y * Math.SQRT1_2];
// }
// console.log(normalize45Degrees(1, 1)); // [0.7071067811865476, 0.7071067811865476]

//*********************************************************** */

// Math.SQRT2
// Square root of 2 (approximately 1.414)
// console.log(Math.SQRT2); // 1.4142135623730951

// // Calculate diagonal of a square
// function squareDiagonal(side) {
// 	return side * Math.SQRT2;
// }
// console.log(squareDiagonal(10)); // 14.142135623730951

// // Calculate hypotenuse of a 45-45-90 triangle
// function hypotenuse45Triangle(side) {
// 	return side * Math.SQRT2;
// }
// console.log(hypotenuse45Triangle(5)); // 7.0710678118654755

//*********************************************************** */

//***************Basic Math Methods*********************//
// Math.abs() - Absolute Value
// Returns the absolute (positive) value of a number.

// console.log(Math.abs(-51561));
// console.log(Math.abs(3.14));
// console.log(Math.abs(-3.14));

// //Calculate Distance between two points on a number line
// function distance1D(point1, point2) {
// 	return Math.abs(point1 - point2);
// }
// console.log(distance1D(10, 15));
// console.log(distance1D(25, 10));

// //Calculate error margine
// function isWithinErrorMargin(measered, expected, margin) {
// 	return Math.abs(measered - expected) <= margin;
// }
// console.log(isWithinErrorMargin(10.2, 10, 0.5));

//*********************************************************** */

// Math.sign() - Sign of a Number
// Returns 1 if positive, -1 if negative, 0 if zero.

// console.log((Math.sign(3)))
// console.log(Math.sign(-3))
// console.log(Math.sign(0))
// console.log(Math.sign(-0))

// // Determine direction of movement
// function getDirection(velocity) {
//      const sign = Math.sign(velocity);
//      if (sign === 1) return "Moving Forward"
//      if (sign === -1) return "Moving Backward"
//      return "stationary"
// }
// console.log(getDirection(5))
// console.log(getDirection(-3))
// console.log(getDirection(0))

// // Normalize values to -1, 0, or 1
// function normalizaInput(value) {
//      return Math.sign(value)
// }
// console.log(normalizaInput(1500))
// console.log(normalizaInput(-516))

//*********************************************************** */

// Math.pow() - Power
// Returns the base raised to the exponent power.

// console.log(Math.pow(2, 3));
// console.log(Math.pow(4, 0.5));
// console.log(Math.pow(7, 2));
// console.log(Math.pow(64, 1 / 6));

// // Calculate compound interest
// function compoundIntrest(prinsipal, rate, time, compoundPerYear) {
// 	return (
// 		prinsipal * Math.pow(1 + rate / compoundPerYear, compoundPerYear * time)
// 	);
// }
// console.log(compoundIntrest(1000, 0.05, 10, 1));
// console.log(compoundIntrest(1000, 0.05, 10, 12));

// //Calculate area of a square
// function squareArea(side) {
// 	return Math.pow(side, 2);
// }
// console.log(squareArea(4));

// //Calculate volume of a cube
// function cubeVolume(side) {
// 	return Math.pow(side, 3);
// }
// console.log(cubeVolume(3));

//*********************************************************** */

// Math.sqrt() - Square Root
// Returns the square root of a number.

// console.log(Math.sqrt(16));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(-1));

// //Calculate hypoteneus using Pythagorean theorem
// function calculateHypotenuse(a, b) {
// 	return Math.sqrt(a * a + b * b);
// }
// console.log(calculateHypotenuse(3, 4));
// console.log(calculateHypotenuse(5, 12));

// // Calculate distance between two points in 2D space
// function distance2D(x1, y1, x2, y2) {
// 	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// }
// console.log(distance2D(0, 0, 3, 4));

//*********************************************************** */

// Math.cbrt() - Cube Root
// Returns the cube root of a number.

// console.log(Math.cbrt(8));
// console.log(Math.cbrt(-8));
// console.log(Math.cbrt(27));
// console.log(Math.cbrt(1000000));

// // Calculate side length of a cube from volume
// function cubeSideFromeVolume(volume) {
// 	return Math.cbrt(volume);
// }
// console.log(cubeSideFromeVolume(125));

// // Scale a 3D object proportionally

// function scale3D(originalSize, scaleFactor) {
// 	return originalSize * Math.cbrt(scaleFactor);
// }
// console.log(scale3D(10, 8));

//*********************************************************** */

//******************Rounding Methods*************** */

// Math.round() - Round to Nearest Integer
// Rounds to the nearest integer (0.5 rounds up).

// console.log(Math.round(4.3))
// console.log(Math.round(4.5))
// console.log(Math.round(4.7))
// console.log(Math.round(-4.7))
// console.log(Math.round(-4.2))

// // Round to specific decimal places
// function roundToDecimalPlaces(num, decimalPlaces)
// {
//      const factor = Math.pow(10, decimalPlaces)
//      return Math.round(num*factor)/factor
// }
// console.log(roundToDecimalPlaces(3.141596516811,3))
// console.log(roundToDecimalPlaces(2.718, 1))

// // Round prices for display
// function formatPrice(price) {
//      return `${Math.round(price)}`
// }
// console.log(formatPrice(24.49))
// console.log(formatPrice(24.51))

//*********************************************************** */

// Math.floor() - Round Down
// Rounds down to the nearest integer.

// console.log(Math.floor(4.9858585888888888888899999999))
// console.log(Math.floor(4.1))
// console.log(Math.floor(-4.1))

// // Calculate complete hours
// function getHoursElapse(minutes) {
//      return Math.floor(minutes/60)
// }
// console.log(getHoursElapse(125))

// // Integer division (quotient)
// function quotient(divident, divisor) {
//      return Math.floor(divident/divisor)
// }
// console.log(quotient(17, 5))

// // Calculate how many complete items fit
// function intemsFit(containerSize, itemSize) {
//      return Math.floor(containerSize/itemSize)
// }
// console.log(intemsFit(23,5))

//*********************************************************** */

// Math.ceil() - Round Up
// Rounds up to the nearest integer.

// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(4.9)); // 5
// console.log(Math.ceil(-4.1)); // -4 (rounds toward positive infinity)

// // Calculate pages needed
// function pagesNeeded(totalItems, itemsPerPage) {
// 	return Math.ceil(totalItems / itemsPerPage);
// }
// console.log(pagesNeeded(17, 5)); // 4 pages

// // Calculate containers needed
// function containersNeeded(totalVolume, containerCapacity) {
// 	return Math.ceil(totalVolume / containerCapacity);
// }
// console.log(containersNeeded(42, 10)); // 5 containers

// // Calculate minimum number of trips
// function minimumTrips(people, carCapacity) {
// 	return Math.ceil(people / carCapacity);
// }
// console.log(minimumTrips(22, 5)); // 5 trips

//*********************************************************** */

// Math.trunc() - Remove Decimal Part
// Removes the decimal part, returning just the integer part.

// console.log(Math.trunc(4.9));
// console.log(Math.trunc(4.1));
// console.log(Math.trunc(-4.9));

// // Extract integer part of coordinates
// function getGridCoordinates(x, y) {
// 	return [Math.trunc(x), Math.trunc(y)];
// }
// console.log(getGridCoordinates(27.7, 45.2));

// // Extract hours from decimal time
// function getHours(desimalYear) {
// 	return Math.trunc(desimalYear);
// }
// console.log(getHours(14.75));

// // Remove fractional part without rounding
// function removeDecimals(number) {
// 	return Math.trunc(number);
// }
// console.log(removeDecimals(123.456)); // 123

//******************Min/Max Methods****************************/

//*********************************************************** */

// Math.min() - Minimum Value
// Returns the smallest of the provided numbers.

// console.log(Math.min(5, 10, 3, 8, 1));
// console.log(Math.min(-5, -10));
// console.log(Math.min(-Infinity, 10000));
// console.log(Math.min());

// // Find lowest price
// const prices = [19.99, 15.49, 22.99, 12.99];
// const lowestPrice = Math.min(...prices);
// console.log(lowestPrice);

// // Clamp a value to a minimum
// function ensureMinimum(value, minimum) {
// 	return Math.max(value, minimum);
// }
// console.log(ensureMinimum(5, 10));
// console.log(ensureMinimum(15, 10));

// // Find closest point to origin
// function closestToOrigin(points) {
// 	let minDistance = Infinity;
// 	let closestPoint = null;
// 	for (const point of points) {
// 		const distance = Math.sqrt(point.x ** 2 + point.y ** 2);
// 		if (distance < minDistance) {
// 			minDistance = distance;
// 			closestPoint = point;
// 		}
// 	}
// 	return closestPoint;
// }
// const points = [
// 	{ x: 3, y: 4 },
// 	{ x: 1, y: 1 },
// 	{ x: 5, y: 12 },
// ];
// console.log(closestToOrigin(points))

//*********************************************************** */

// console.log(Math.max(5, 10, 3, 8, 1)); // 10
// console.log(Math.max(-5, -10)); // -5
// console.log(Math.max()); // -Infinity

// // Find highest score
// const scores = [85, 92, 78, 95, 88];
// const highestScore = Math.max(...scores);
// console.log(highestScore); // 95

// // Clamp a value to a maximum
// function ensureMaximum(value, maximum) {
// 	return Math.min(value, maximum);
// }
// console.log(ensureMaximum(15, 10)); // 10 (value is above maximum)
// console.log(ensureMaximum(5, 10)); // 5 (value is below maximum)

// // Clamp a value between min and max
// function clamp(value, min, max) {
// 	return Math.min(Math.max(value, min), max);
// }
// console.log(clamp(15, 0, 10)); // 10 (value clamped to max)
// console.log(clamp(-5, 0, 10)); // 0 (value clamped to min)
// console.log(clamp(7, 0, 10)); // 7 (value within range)

//****************Random Number Generation************ */

//*********************************************************** */

// Math.random() - Random Number Between 0 and 1
// Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
// console.log(Math.random());

// // Random number between min and max (inclusive for min, exclusive for max)
// function getRandomNumber(min, max) {
// 	return Math.random() * (max - min) + min;
// }
// console.log(getRandomNumber(1, 10));

// // Random integer between min and max (inclusive for both)
// function getRandomInt(min, max) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1) + 1);
// }
// console.log(getRandomInt(1, 6));

// // Random element from an array
// function getRandomElement(array) {
// 	return array[Math.floor(Math.random() * array.length)];
// }
// console.log(getRandomElement(["apple", "banana", "dates"]));

// // Random boolean with probability
// function randomBoolean(probability = 0.5) {
// 	return Math.random() < probability;
// }
// console.log(randomBoolean());
// console.log(randomBoolean(0.8));

// // Generate random color
// function getRandomColor() {
// 	const r = Math.floor(Math.random() * 256);
// 	const g = Math.floor(Math.random() * 256);
// 	const b = Math.floor(Math.random() * 256);
// 	return `rgb(${r},${g},${b})`;
// }
// console.log(getRandomColor());

// //Shuffle an array (Fisher-Yates algorithm)
// function shuffleArray(array) {
// 	const result = [...array];
// 	for (let i = result.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		[result[i], result[j]] = [result[j], result[i]];
// 	}
// 	return result;
// }
// console.log(shuffleArray([1, 2, 3, 4, 5]));

//*********************************************************** */

