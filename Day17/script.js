function highlightText() {
    console.log("About to highlight a text...");

    //document.getElementByClassName("info");
    let elements = document.querySelectorAll("p.info");
    elements.forEach((el) => {
        el.style.backgroundColor = "yellow";
    })
}

function filterList(){
    const inputel = document.getElementById("searchInput");
    const input = inputel.value;

    const items = document.querySelectorAll("ul#itemList li");

    items.forEach((item)=>{
       //item.style.backgroundColor = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "green" : "";
       item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
    })

}