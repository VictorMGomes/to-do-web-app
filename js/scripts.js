//get elements
let  inputNewTask = document.querySelector("#add-task");
let  btnNewTask = document.querySelector("#add-btn");
let taskList = document.querySelector("#task-list");
  function escrever() {
    console.log(inputNewTask.value);  
  }
  btnNewTask.addEventListener("click", escrever);