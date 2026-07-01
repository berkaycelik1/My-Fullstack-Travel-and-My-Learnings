const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
let tasks = JSON.parse(localStorage.getItem("görevlerim")) || [];

tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerText = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Sil 🗑️";

    deleteBtn.addEventListener("click", () => {
        li.remove();
         const index = tasks.indexOf(task);
        tasks.splice(index, 1);
        localStorage.setItem("görevlerim", JSON.stringify(tasks));
    });
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
});

addBtn.addEventListener("click", () => {
    
    const taskText = todoInput.value;

    if (taskText === "") { 
        alert("Lütfen bir görev girin!");
        return;
    }
     tasks.push(taskText);
    localStorage.setItem("görevlerim", JSON.stringify(tasks));

    const li = document.createElement("li");
    li.innerText = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Sil 🗑️";

    deleteBtn.addEventListener("click", () => {
        li.remove();

        const index = tasks.indexOf(taskText);
        tasks.splice(index, 1);
         localStorage.setItem("görevlerim", JSON.stringify(tasks));

      
    });
      li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = "";
});