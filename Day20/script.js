console.log("Day 20 - DOM: Advanced Tips");

//Efficient DOM traversal

const parent = document.querySelector(".card");
const firstChild = parent.firstElementChild;
console.log("First Child:", firstChild);   
const next = firstChild.nextElementSibling;
console.log("Next Sibling:", next);          
const lastChild = parent.lastElementChild;
console.log("Last Child:", lastChild);
const parentOfElement = firstChild.parentElement;
console.log("Parent of First Child:", parentOfElement);

//Templates and cloning
const template = document.getElementById("card-template");
const clone = template.content.cloneNode(true);
clone.querySelector(".title").textContent = "Cloned Card Title";
clone.querySelector(".desc").textContent = "This card was created by cloning a template.";

document.body.appendChild(clone);

//Document Fragment and Range

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

document.getElementById("list").appendChild(fragment);

//Range - fragment of document between 2 boundary points

const p = document.getElementById('para');
const range = document.createRange();

range.setStart(p.firstChild, 6); // Hello world and universe - starts from w
range.setEnd(p.childNodes[2], 4);  // what does this line do? - for "Hello world and universe", it sets the end after "worl

const content = range.cloneContents();
console.log("Range:", content);

//Shadow DOM - local scope and main dom hs global and shared scope

document.querySelector('.card').innerHTML  // gives entire content of the div tag with class card where as shadowDOM
//  is not DOMException, mostly useful for creating web components. It lives in isolation from the main DOM tree.

//shadow host - its used in custom elements. these hide the internal structure of css and js from outside world, used for
//encapsulation

const shadowHost = document.querySelector('#box');
const shadow = shadowHost.attachShadow({ mode: 'open' });
shadow.innerHTML = `<style>p{ color: red;}</style><p>Hello Shadow!</p>`; // can be custom component

//Advanced Class Manipulation

// const btn = document.querySelector('.btn');
// btn.clasList.add('active');
// btn.classList.remove('disabled');
// btn.classList.toggle('visible');
// btn.classList.replace('error', 'success');

//Handling Large-Scale DOM Updates - instead of directly adding to DOM, we will use document fragment

function addItems(count){
    const frag = document.createDocumentFragment();
    for(let i=0; i< count; i++){
        const div = document.createElement('div');
        div.textContent = `Item ${i}`;
        frag.appendChild(div);
    }
    document.body.appendChild(frag);
}

addItems(1000); // adds 1000 items efficiently

//Mutation Observer - to watch for changes in DOM everytime something is added to a DOM element, subtree - added, modified

// const observer = new MutationObserver(callback);
// observer.observe(targetNode, config);

const target = document.getElementById('watchMe');

const observer = new MutationObserver((mutationList, observer)=>{
    for (const mutation of mutationList){
        console.log(`Type of mutation: ${mutation.type}`);

        if (mutation.type === 'childList'){
            console.log('A child node has been added or removed.');
        }
         if (mutation.type === 'attributes'){
            console.log(`An attribute ${mutation.attributeName} was changed.`);
        }
         if (mutation.type === 'characterData'){
            console.log(`Character data has been changed to: ${mutation.target.data}`);
        }
    }

});

const config = {
    subtree: true,
    characterData: true,
    childList: true,
    attributes: true
}

observer.observe(target,config)

function changeDOM(){
    target.textContent = "GoodBye!";
    target.setAttribute('data-status', 'updated');
}