console.log("Project: TODO");

function addTask() {
    const taskInput = document.getElementById("new-task-input");
    const taskList = document.getElementById("task-list"); //get ul

    const task = taskInput.value;

    if (task.trim() === "") return;
    const li = document.createElement("li");
    li.textContent = task;

    const completeButton = document.createElement("button");
    completeButton.textContent = "✅";
    completeButton.style.marginLeft = "10px";
    completeButton.onclick = function() {
        //li.style.textDecoration = "line-through"; //strike through text
        li.classList.toggle("completed"); //toggle completed class or use add/remove class
    }

    li.appendChild(completeButton); //add button to li

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.marginLeft = "10px";
    deleteButton.onclick = function() {
        taskList.removeChild(li); //remove li from ul
    }
    li.appendChild(deleteButton); //add button to li

    taskList.appendChild(li); //add li to ul

    taskInput.value = "";

}

function filterTasks() {
    //Implement filter functionality
}