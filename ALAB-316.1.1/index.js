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

//========================================================================================================
// Part 2: Creating a Menu Bar
//TODO: 1.Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");

//TODO: 2.Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

//TODO: 3.Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//TODO: 4.Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around")



