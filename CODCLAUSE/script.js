// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
    
    const now = new Date();
    const dateAndTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    li.innerHTML = `
        <span class="emoji">&#128220;</span>
        ${taskText}
        <span class="date">${dateAndTime}</span>
        <button onclick="removeTask(this)">&#128465; Remove</button>
    `;
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Function to remove a task
function removeTask(button) {
    const taskList = document.getElementById("task-list");
    const li = button.parentElement;
    taskList.removeChild(li);
}
