//get elements
let  inputNewTask = document.querySelector("#add-task");
let  btnNewTask = document.querySelector("#add-btn");
let taskList = document.querySelector("#task-list");

//Function to create a new task
  function setNewTask() {
    if (!inputNewTask.value == "") {
      let taskItem= document.createElement('div');
      taskItem.innerHTML=`<div class="task-item" title="Click and hold to check">
                        <li>${inputNewTask.value}</li>
                        <div class="group-btn">
                        <button id="edit-btn" title="Edit Task"><i class="far fa-edit"></i></button>
                        <button id="del-btn" title="Remove Task"><i class="fas fa-trash"></i></button>
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
