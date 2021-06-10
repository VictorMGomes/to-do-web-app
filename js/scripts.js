//get elements
let  inputNewTask = document.querySelector("#add-task");
let  btnNewTask = document.querySelector("#add-btn");
let taskList = document.querySelector("#task-list");

//Function to create a new task
  function setNewTask() {
    if (!inputNewTask.value == "") {
      let taskId = Date.now();
      let taskItem= document.createElement('div');
      taskItem.innerHTML=`<div class="task-item" title="Click and hold to check the task" id="${'task-item-' + taskId}">
                        <li>${inputNewTask.value}</li>
                        <div class="group-btn">
                        <button id="edit-btn" title="Click to edit the task"><i class="far fa-edit"></i></button>
                        <button id="del-btn" title="Click to remove the task"><i class="fas fa-trash"></i></button>
                        </div>                       
                        </div> `;
      taskList.appendChild(taskItem);
      inputNewTask.value = "";
  }      
    }

   //Listeners to create a new Task 
  btnNewTask.addEventListener("click", setNewTask);
  inputNewTask.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      setNewTask();
      inputNewTask.value = "";
    }
});





