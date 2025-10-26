console.log("Event Bubbling, Capturing and Event Delegation");

// In event bubbling, the event starts from the target element and propagates/bubbles up to the ancestors

//The flow is: Child -> Parent -> Grandparent -> ... -> Document -> Window

//Bubbling

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked - Bubbling");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked - Bubbling");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child Clicked - Bubbling");
});

// In event capturing, the event starts from the topmost ancestor and propagates down to the target element. It happens
//before bubbling phase and before the actual target handles the event

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked - Capturing");
}, true);

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked - Capturing");
}, true);

document.getElementById("child").addEventListener("click", () => {
    console.log("Child Clicked - Capturing");
}, true);

// Event Delegation
// Instead of adding event listeners to multiple child elements, we can add a single event listener 
// to their common parent and handle events for all child elements through that single listener

// add ul and li in html for this example

document.getElementById("item-list").addEventListener("click", function(event) { // get the parent ul
    // check if the clicked element is an li
    if (event.target.tagName === "LI") {
        console.log(`You clicked on ${event.target.textContent}`);
    }   
});

// Now when we click on any li item inside ul with id item-list, the event will be handled by the parent ul
// and we can determine which li was clicked using event.target

// stop event propagation or bubbling- add another html button with id son for this example

//event stopPropagation

document.getElementById("father").addEventListener("click", function(event) {
    console.log("Parent clicked");
});

document.getElementById("son").addEventListener("click", function(event) {
    console.log("Son clicked");
    event.stopPropagation(); // stop the event from bubbling up to father
});