console.log("Day 18 - DOM Manipulation Exercises");

//Manipulating styles and Classes
{
 const pElem = document.getElementById("p-id");
 console.log(pElem.style);
 pElem.style.color = "blue";
 pElem.style.backgroundColor = "pink";
}

//classes manipulation and using css
{
    const mainDivElem = document.getElementById("main-id");
    // console.log(mainDivElem.className);

    // mainDivElem.className = "secondary-class"
    // console.log(mainDivElem.className);

    console.log(mainDivElem.classList);
    mainDivElem.classList.add("secondary-class","third-class");
    mainDivElem.classList.remove("layout");
    mainDivElem.classList.replace("main-class","secondary-class");

    console.log("Does it have test class?",mainDivElem.classList.contains("test-class"));
    mainDivElem.classList.toggle("test");
}

//Controlling Visibilities - using style attribute - display: none and visibility: hidden

{
    const mainDivElem = document.getElementById("main-id");
    mainDivElem.style.display = "block"; //none, block, inline, inline-block

    //mainDivElem.style.visibility = "hidden"; //hidden, visible

    mainDivElem.style.opacity = "0.5"; // 0 to 1
}





