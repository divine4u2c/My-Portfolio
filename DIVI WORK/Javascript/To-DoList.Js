// Set Our Refrences

const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList")

//Load task when page loads
document.addEventListener("DOMContentLoaded", addTask);

//add Task on button click
taskInputBtn.addEventListener("click", addTask);

//Add task on Enter key press
taskInput.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        addTask();
    }
})


// addTask Function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please add a task");
        return;
    }
    const Task = { text: "task", completed: false };
    saveTask(taskInput); //save to local storage
    createTaskElement(task); // show in the webpage
    taskInput.value = ""
}

function createTaskElement(task) {
    const li = document.createElement("li")
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
    }

    const completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-success btn-sm me-2";
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    completeBtn.addEventListener("click", () => {
        task.completed = !task.completed;
        if (task.completed) {
            span.style.textDecoration = "line-Through";
            span.style.color = "gray";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "";
        }
        updateTaskInStorage(task.text, task.completed);

    });

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn shadow btn-danger btn-sm";
    deleteBtn.innerHTML = "<i class='fas fa-trash'></i>";
    deleteBtn.addEventListener("click", function () {
        li.remove();
        deleteTaskFromStorage(task.text);
    });

    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group"
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    taskList.appendChild(li);
    }

    //Local Storage Functions
    function getTasksFromStorage() {
        const tasks = localStorage.getItem("tasks");
        return task ? JSON.parse(tasks) : [];

    }

    function saveTask(task) {
        const tasks = getTasksFromStorage();
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function updateTaskInStorage(taskText, completedStatus) {
        const tasks = getTasksFromStorage();
        const updatedTasks = tasks.map((t) =>
            t.text ===taskText ? {...t, completed: completedStatus} : t
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    function deleteTaskFromStorage(taskText) {
        let tasks = getTasksFromStorage();
        tasks = tasks.filter((t) =>t.text !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = getTasksFromStorage();
        tasks.forEach(task => createTaskElement(task));
    }
    

