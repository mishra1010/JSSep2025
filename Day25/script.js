console.log("Fetch API Usage");

// Example JavaScript code to make a GET request to an API endpoint using fetch
    // fetch(URL, options)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));

// Use async/await with fetch

    // async function fetchData(url){
    // try{
    // const response = await fetch(url, options);
    // const data = await response.json();
    // console.log(data);
    // } catch(error){
    // console.error('Error:', error);
    // }
    // }

    // fetchData('https://api.example.com/data');


//Use fetch for Getting resources

async function fetchPosts() {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchPosts();

// Use fetch with query parameters

async function fetchUsersByName(name) {
    const API_URL = `https://jsonplaceholder.typicode.com/users`;

    const queryParams = {
        name: name,
    };
    try {
        //const response = await fetch(API_URL);
        // if (!response.ok) {
        //     throw new Error('Network response was not ok ' + response.statusText);
        // }
        const queryString = new URLSearchParams(queryParams).toString();
        const url = `${API_URL}?${queryString}`;
        //const users = await response.json();
        console.log(url);
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
fetchUsersByName('Leanne Graham');

// Use fetch to POST data to an API
async function createPost(title, body, userId) {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    const postData = {
        title: title,
        body: body,
        userId: userId,
    };
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const newPost = await response.json();
        console.log('Post created:', newPost);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

createPost('New Post Title', 'This is the body of the new post.', 1);


// fetch with PATCH request- used to update partial resource
//fetch with DELETE request- used to delete resource
//fetch with PUT request- used to update entire resource

// Use fetch with custom headers
async function login(){
    const API_URL = 'http://localhost:3000/login';

    try{
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer secret-token",
                "Custom-Header": "Learn"
            },
            body: JSON.stringify({
                username: 'your_username',
                password: 'your_password',
            }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Login successful:', data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

login();

// Create a request object - advanced usage of fetch - allows more control over the request

const request1 = new Request("http://localhost:3000/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        id: crypto.randomUUID(),
        title: "Custom Request Post",
        body: "This post is created using a custom Request object.",
        views: 0,
    }),
});

async function post(request){
    try{
    const response = await fetch(request);
    const data = await response.json();
    console.log('Post created with custom Request:', data);
} catch (error) {
    console.error('Fetch error:', error);
    }  
}

post()

//Handling response

//Handling Errors

// Canceling a Request

const downloadBtn = document.querySelector("#download-btn");
const cancelBtn = document.querySelector("#cancel-btn");

downloadBtn.addEventListener("click", downloadFile);
cancelBtn.addEventListener("click", () => {
    if (controller) {
    controller.abort();
    console.log("Download canceled.");
    }
});
const url ='./download/file.txt';

async function downloadFile(){
    controller = new AbortController();
    const signal = controller.signal;
    try{
        console.log("Downloading...");
        setTimeout(async () => {
            const response = await fetch(url, { signal });
            console.log("Download completed.");
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = objectUrl;
            link.download = "file.txt";
            link.click();
            URL.revokeObjectURL(objectUrl);
        }, 2000);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        


    } catch(err) {
        console.error(`Download error: ${err.message}`);
    }
}