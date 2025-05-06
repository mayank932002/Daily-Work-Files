let btn = document.getElementById("btnRate");
let outer = document.getElementById("output");
let rates = document.getElementsByName("rate");
btn.addEventListener("click", () => {
	rates.forEach((x) => {
		if (x.checked) {
			outer.textContent = `You Have Selected ${x.value}`;
		}
	});
});
