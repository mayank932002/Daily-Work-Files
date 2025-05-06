let btn = document.getElementById("btnCount");
btn.addEventListener("click", () => {
     let headings = document.getElementsByTagName("h2")
     alert(`Total Heading In This Document Is ${headings.length}`)
})
