//Example 1
// function f1() {
//     console.log("Function f1 is called");
// }

// function main(){
//     setTimeout(() => {
//         console.log("Inside setTimeout");
// },5000); // 5 seconds delay or 0 sec delay - output is the same
//     f1();
// }
// main();

// Example 2

function f1() {
    console.log("Function f1 is called");
}

function f2() {
    console.log("Function f2 is called");
}

function main(){
    console.log("main function is called");
    setTimeout(f1,0); // 5 seconds delay or 0 sec delay - output is the same
    new Promise((resolve, reject) => {
        resolve("Promise is resolved");
    }).then((res) => {
        console.log(res);
    });
    f2();       
}

main();
// Output:main -> f2 -> i am a promise ->f1