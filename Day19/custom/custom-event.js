console.log("Custom Events in JavaScript");

// Creating a custom event


// step 1: create a custom event
const myEvent = new CustomEvent("userLoggedIn", {
    detail:{
        username: "deepak",
        role: "admin"
    }
});

// step 2: listen to the custom event
document.addEventListener("userLoggedIn", function(event) {
    console.log("User Logged In:");
    console.log("Username:", event.detail.username);
    console.log("Role:", event.detail.role);
});

//step 3: Dispatching the custom event
document.dispatchEvent(myEvent);

function loginUser(username) {
    const event = new CustomEvent("userLoggedIn", {
        detail: {
            username
            
}
    });
    document.dispatchEvent(event);
}

document.addEventListener("userLoggedIn", function(event) {
    const user = event.detail.username;
    document.getElementById("welcome").textContent = `Welcome, ${user}!`;
});