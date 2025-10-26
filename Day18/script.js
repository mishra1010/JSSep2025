console.log("Day 18 - DOM Manipulations")

//create Elements

const pElem = document.createElement("p");
console.log(pElem);

//Add content to the element
pElem.innerText = "This is a paragraph created using JS dynamically";
document.body.appendChild(pElem); //append to body

//Insert Elements

const span = document.createElement("span");
span.innerText = " - This is a span";
const pElem1 = document.querySelector("p");
//document.body.insertBefore(span, pElem1);
document.body.insertBefore(span, pElem1.nextSibling); //insert after pElem1

//Modify Content

{
    const pElem = document.querySelector("p");
    pElem.innerText = "<u>This is modified</u> content of paragraph";
    pElem.innerHTML = "<u>This is modified</u> content of paragraph";
    const divElem = document.querySelector("div");
    console.log("Inner Text", divElem.innerText);
    console.log("Text Content", divElem.textContent);
}

//Remove/replacing Elements

{
    let list = document.getElementById("myList");
    console.log("List before removal", list); //removal before
    const itemToRemove = list.children[0];
    //list.removeChild(itemToRemove); //removes first child element
    //console.log("List after removal", list);

    //list.replaceChildren(); //removes all child elements
    const pElem = document.querySelector("p");
    //list.replaceChildren(pElem); //replaces all child elements with given elements

    document.getElementById("removeMe").remove(); //direct removal
}

//Read, Write and Remove Attributes

{
    const imgElem = document.querySelector("img");
    console.log(imgElem.getAttribute("alt")); //read attribute
    imgElem.setAttribute("src", "../attachments/DOM.png"); //write attribute
    imgElem.setAttribute("alt", "New"); 
    imgElem.removeAttribute("height"); //remove attribute

    imgElem.hasAttribute("width"); //check if attribute exists, true/false
}

//Traversing/Navigating DOM

{
//Parent Element //Parent Node
const span = document.getElementById("text");
console.log("Parent Element:", span.parentElement);
console.log("Parent Node:", span.parentNode);
console.log("Parent Node:", span.parentNode.parentNode);

//children and childNode

const myDiv = document.getElementById("myDiv");
console.log("Children:", myDiv.children); //element nodes
console.log("Child Nodes:", myDiv.childNodes); //all nodes
//firstChild and firstElementChild
console.log("First Child Node:", myDiv.firstChild); //can be text node
console.log("First Element Child:", myDiv.firstElementChild);//element node for html only

//lastChild and lastElementChild
//nextSibling and nextElementSibling
//previousSibling and previousElementSibling
}

//Manipulating Styles

