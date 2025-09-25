console.log("name is "+names)
var names;
//let names;
names = "DevRev"
console.log("name is "+names)

//function hoisting

chase();
function chase(){
    console.log("chasing");

    caught();
}

function caught(){
    console.log("caught");
}

// function expression - not hoisted

test();

var test = function(){
    console.log("test");
}

//we will get type error - test is not a function
//because test is undefined at the time of call
//as var is hoisted but not the assignment  