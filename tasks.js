let tasksArray = []
let taskId = 0

function addTask() {
    let name = document.getElementById('taskName').value;
    let priority = document.getElementById('priority').value;
    let isImportant = document.getElementById('isImportant').checked;
    let date = new Date();

    if (!name) {
        alert("Pleast enter a task name.");
        return;
    }

    const task = {
        id: taskId++,
        name: name,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false,
        date: date
    };

    tasksArray.push(task);
    console.log(JSON.stringify(tasksArray));

    displayTasks();
}

function displayTasks() {
    const container = document.getElementById("taskmanager");
    container.innerHTML = "";

    for (let i = 0; i < tasksArray.length; i++) {
        let task = tasksArray[i];
        let taskBox = document.createElement("div");
        taskBox.className = "task";

        if (task.isImportant) {
            taskBox.classList.add("important");
        }

        if (task.isCompleted) {
            taskBox.classList.add("completed");
        }

        taskBox.innerHTML =
        "<p>Task: " + task.name + "</p>" +
        "<p>Priority: " + task.priority + "</p>" +
        "<label><input type='checkbox' onclick='toggleComplete(" + task.id + ")' " +
        (task.isCompleted ? "checked" : "") + "> Completed</label> " +
        "<button onclick='deleteTask(" + task.id + ")'>Delete</button>";

        container.appendChild(taskBox);
    }
}

function toggleComplete(id) {
    for (let i = 0; i <tasksArray.length; i++) {
        if (tasksArray[i].id == id) {
            tasksArray[i].isCompleted = !tasksArray[i].isCompleted;
            break;
        }
    }

    displayTasks();
    console.log(JSON.stringify(tasksArray));
}

function deleteTask(id) {
    let updatedTasks = [];

    for (let i = 0; i < tasksArray.length; i++) {
        if (tasksArray[i].id !== id) {
            updatedTasks.push(tasksArray[i]);
        }
    }

    tasksArray = updatedTasks;

    displayTasks();
    console.log(JSON.stringify(tasksArray));
}