// Part 1: Getting Started
//TODO: 1.Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

//TODO: 2.Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.height = "100%";
mainEl.style.backgroundColor = "var(--main-bg)";

//TODO: 3.Set the content of mainEl to <h1>DOM Manipulation</h1>. 
const h1El = document.createElement("h1");
h1El.textContent = "DOM Manipulation";
mainEl.appendChild(h1El);

//TODO: 4.Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");



