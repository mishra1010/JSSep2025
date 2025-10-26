console.log("Event Defaults");

// By default, events bubble up from the target element to its ancestors (bubbling phase).
// Most events also support capturing phase, where the event propagates from the topmost ancestor down to the target element.
// However, by default, event listeners are set to listen during the bubbling phase.

// by default  href will take to website link and how we can stop that default behavior

document.getElementById("google-link").addEventListener("click", function(event) {
    //console.log("Link clicked");
    event.preventDefault(); // prevent default behavior of link
    console.log("Default behavior prevented. Not navigating to Google.");
});

//prevent login form submit event default behavior

document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
    console.log("Form submission prevented. You can handle login via AJAX here.");
});

// Similarly, we can prevent other default behaviors like right-click context menu