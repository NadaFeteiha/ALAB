// Menu data structure
/*var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];*/

var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];
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

//========================================================================================================
// Part 3: Adding Menu Buttons

// TODO: 1.Iterate over the entire menuLinks array and for each "link" object:
// TODO: 2.Create an <a> element.
// TODO: 3.add an href attribute with its value set to the href property of the "link" object.
// TODO: 4.Set the new element's content to the value of the text property of the "link" object.
// TODO: 5.Append the new element to the topMenuEl element.

menuLinks.forEach(link => {
    const aEl = document.createElement("a");
    aEl.href = link.href;
    aEl.textContent = link.text;
    topMenuEl.appendChild(aEl);
});

//========================================================================================================
// Part 4: Adding Interactivity
// how to add user interaction to DOM elements


//========================================================================================================
// ******************************************************************\\
//                         ALAB 316.3.1:                              \\
// *******************************************************************\\

// Part 3: Creating the Submenu
// TODO: 1.Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");

// TODO: 2.Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// TODO: 3.Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// TODO: 4.Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");


// TODO: 1.Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// TODO: 2.Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = 0;

//========================================================================================================
// Part 4: Adding Menu Interaction
// TODO: 1.Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

let topMenuLinks = document.querySelectorAll("a");

// TODO: 2.Attach a delegated 'click' event listener to topMenuEl.
//      TODO: The first line of code of the event listener function should call the event object's preventDefault() method.
//      TODO: The second line of code of the function should immediately return if the element clicked was not an <a> element.
//      TODO: Log the content of the <a> to verify the handler is working.

// TODO: Part 4: add a toggled "active" state to each menu item
// TODO: Part 5: set the submenu to show or hide itself depending on the menu state:


topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.tagName !== "A") {
        return;
    } else {
        console.log(`HERE => ${event.target.textContent} clicked`);
    }

    removeActive();

    // Find the clicked link object in menuLinks
    const clickedLink = menuLinks.find(link => link.text === event.target.textContent);

    // Toggle active state
    if (!event.target.classList.contains("active")) {
        event.target.classList.add("active");

        //  display the submenu
        if (clickedLink.subLinks) {

            // here we check if the submenu is already open or not
            if (subMenuEl.style.top === "100%") {
                subMenuEl.style.top = "0"; // Hide submenu
            } else {
                subMenuEl.style.top = "100%"; // Show submenu
                buildSubmenu(clickedLink.subLinks);
            }

        } else {
            subMenuEl.style.top = "0"; // Hide submenu

            // TODO: Update content of  h1
            addContentToHeadline(event.target.textContent);
        }
    } else {
        event.target.classList.remove("active");
        subMenuEl.style.top = "0"; // Hide submenu when deactivating
    }
});

subMenuEl.addEventListener("click", (event) => {
    console.log(`HERE in top => ${event.target.textContent} clicked`);
    event.preventDefault();

    if (event.target.tagName !== "A") {
        console.log(`HERE inside not a => ${event.target.textContent} clicked`);
        return;
    } else {
        console.log(`HERE in subMenuEl => ${event.target.textContent} clicked`);
    }

    subMenuEl.style.top = "0";

    removeActive();

    // TODO: Update content of  h1
    addContentToHeadline(event.target.textContent);
});


// Helper functions

// Build the submenu
function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = "";
    subLinks.forEach(subLink => {
        const subAEl = document.createElement("a");
        subAEl.href = subLink.href;
        subAEl.textContent = subLink.text;
        subMenuEl.appendChild(subAEl);
        console.log(`added => ${subLink.text}`);
    });
}

// Remove active state
function removeActive() {
    topMenuLinks.forEach(link => {
        if (link.classList.contains("active")) {
            link.classList.remove("active");
        }
    });
}

// Update content of  h1
function addContentToHeadline(content) {
    h1El.textContent = content;
}


