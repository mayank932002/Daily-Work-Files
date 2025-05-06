// const btn = document.getElementById("myBtn");

// btn.addEventListener("dblclick", function () {
// 	alert("Button was clicked!");
// });
// function btn() {
// 	alert("Button was clicked!");
// }
// const btn = document.getElementById("infoBtn");

// btn.addEventListener("keypress", function (event) {
// 	// console.log(event); // Logs the whole event object
// 	// console.log(event.type); // "click"
// 	// console.log(event.target.type); // <button> element
// 	console.log(event.key);
// });
// const input = document.getElementById("myInput");

// input.addEventListener("keydown", function (e) {
// 	console.log("Key pressed:", e.key);
// });
// const form = document.getElementById("myForm");

// form.addEventListener("submit", function (e) {
// 	e.preventDefault(); // Stops form from reloading the page
// 	console.log("Form submission prevented!");
// });
// document.getElementById("childBtn").addEventListener("click", function (e) {
// 	console.log("Button clicked");
// 	e.stopPropagation();
// });

// document.getElementById("parentDiv").addEventListener("click", function (e) {
// 	console.log("Div clicked");
// });
// document.getElementById("outer").addEventListener("click", function (event) {
// 	console.log("Target (what was clicked):", event.target.id);
// 	console.log(
// 		"CurrentTarget (where listener is attached):",
// 		event.currentTarget.id
// 	);

// 	// If you click the button:
// 	// Target: "button"
// 	// CurrentTarget: "outer"
// });

const element = document.getElementById("button");

// Click events
// element.addEventListener("click", () => console.log("Element clicked"));
// element.addEventListener("dblclick", () =>
// 	console.log("Element double-clicked")
// );

// // Mouse movement
// element.addEventListener("mousedown", () =>
// 	console.log("Mouse button pressed")
// );
// element.addEventListener("mouseup", () => console.log("Mouse button released"));
// element.addEventListener("mousemove", (e) =>
// 	console.log("Mouse moved to:", e.clientX, e.clientY)
// );

// Mouse enter/leave (doesn't bubble)
// element.addEventListener("mouseenter", () =>
// 	console.log("Mouse entered element")
// );
// element.addEventListener("mouseleave", () => console.log("Mouse left element"));

// // Mouse over/out (bubbles to parent elements)
// element.addEventListener("mouseover", () =>
// 	console.log("Mouse over element or child")
// );
// element.addEventListener("mouseout", () =>
// 	console.log("Mouse out of element or child")
// );

// Context menu (right-click)
// element.addEventListener("contextmenu", (e) => {
// 	console.log("Context menu triggered");
// 	// e.preventDefault(); // Prevents the default context menu
// });

// These are typically added to the document or specific input elements
// document.addEventListener("keydown", (e) => {
// 	console.log("Key pressed down:", e.key);
// 	console.log("Key code:", e.code);
// 	console.log("Modifier keys:", e.ctrlKey, e.shiftKey, e.altKey, e.metaKey);
// });

// document.addEventListener("keyup", (e) => {
// 	console.log("Key released:", e.key);
// });

// document.addEventListener("keypress", (e) => {
// 	console.log("Key pressed (character):", e.key);
// 	// Note: keypress is deprecated, prefer keydown
// });

// // Example: Detect specific key combinations
// document.addEventListener("keydown", (e) => {
// 	if (e.ctrlKey && e.key === "s") {
// 		console.log("Ctrl+S was pressed");
// 		e.preventDefault(); // Prevent browser save dialog
// 	}
// });
// Page lifecycle events
window.addEventListener('load', () => {
  console.log('Page fully loaded (including images, styles, etc.)');
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded (but may still be waiting for images, styles)');
});

window.addEventListener('beforeunload', (e) => {
  console.log('User is about to leave the page');
  // To show a confirmation dialog:
  // e.preventDefault();
  // e.returnValue = ''; // Required for some browsers
});

// Window resize and scroll
window.addEventListener('resize', () => {
  console.log('Window resized:', window.innerWidth, window.innerHeight);
});

window.addEventListener('scroll', () => {
  console.log('Window scrolled:', window.scrollX, window.scrollY);
});

// Focus/visibility events
window.addEventListener('focus', () => console.log('Window gained focus'));
window.addEventListener('blur', () => console.log('Window lost focus'));
document.addEventListener('visibilitychange', () => {
  console.log('Page visibility changed:', document.visibilityState);
});