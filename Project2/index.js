let textbox = document.querySelector(".textbox");

let button = document.querySelector(".button");

let taskList = document.createElement("div");

document.body.appendChild(taskList);

button.onclick = function () {

    let task = textbox.value;

    if (task == "") {

        taskList.innerHTML = "Please enter a task.";
        taskList.style.color = "red";

    }
    else {

        let newTask = document.createElement("div");

        newTask.innerHTML = task;

        newTask.style.backgroundColor = "white";
        newTask.style.padding = "10px";
        newTask.style.marginTop = "10px";
        newTask.style.width = "430px";
        newTask.style.borderRadius = "5px";

        let deleteButton = document.createElement("button");

        deleteButton.innerHTML = "❌";

        deleteButton.style.float = "right";

        deleteButton.onclick = function () {

            taskList.removeChild(newTask);

        };

        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);

        textbox.value = "";

    }

};