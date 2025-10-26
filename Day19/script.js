console.log("Day 18 - Event Handling in JavaScript");

//Event handling in Markup
function handleClick(greeting) { // without parameter and with parameter
    console.log(`Button clicked with a ${greeting}`);
}   

//Event Handling in Script

const myBtn2Elem = document.getElementById("myBtn2");
myBtn2Elem.onclick = function(){
    console.log("My Button 2 Clicked"); // here suppose i have another onclick 
    // function then the latest will be overriding the current one and that is the issue. 
    // So better way is to use addEventListener
}

myBtn2Elem.onclick = handleClick; // this will override the previous onclick function;

//how to pass argument?
myBtn2Elem.onclick = () => handleClick("Hello User"); // using arrow function to pass argument

//Using addEventListener and removeEventListener
const countBtnElem = document.getElementById("countBtn");

let counter = 0;
// countBtnElem.addEventListener("click", function(){
//     console.log("counter",counter);
//     counter++;
// });

countBtnElem.removeEventListener("click", function(){
    console.log("counter",counter);
    counter++;
}); // this will not work because function reference is different, so it won't work s these 2 functions are different
//add a named function instead of anonymous one

const handleCount = function(){
    console.log("counter",counter);
    counter++;
};

const greetMe = function() {
    console.log("Greetings!");
}
countBtnElem.addEventListener("click", handleCount);
countBtnElem.addEventListener("click", greetMe);
//countBtnElem.removeEventListener("click", handleCount); // this will work and removes only handlecount

// also we can add multiple handler functions to addEventListener as above

// DOM Content Loaded

//will never run
document.onDOMContentLoaded = function() {
    console.log("DOM Content Loaded ....");
}

//this will work

document.addEventListener("DOMContentLoaded", function() { // event is DOMContentLoaded
    console.log("DOM Content Loaded ....");
});

//Event Object

// When event happens we get an event object and lets understand anatomy of event object. To check this
//add html for event name search and then we can make changes to js to check more

const searchElem = document.getElementById("search-id");
function handleChange(event) {
    console.log("Event Object:", event); // event object
    console.log("Event Target:", event.target); // which element triggered the event
    console.log("target name:", event.target.name); // name of the element
    console.log("Event Value:", event.target.value); // value of the element
    console.log("Event Object:", event.type); // global event object availabe by default in JS
    console.log("current Target", event.currentTarget); // current target element

    console.log(this); // this will point to the element on which event is registered (inputt element here)
}

searchElem.addEventListener("change", handleChange)

console.log("Event Bubbling, Capturing and Event Delegation");

// Event Bubbling and Capturing
