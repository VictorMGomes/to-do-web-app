//get elements
let  inputNewTask = document.querySelector("#add-task");
let  btnNewTask = document.querySelector("#add-btn");
let taskList = document.querySelector("#task-list");


const taskItemStored = [];

//Function to create a new task
  function setNewTask() {
    if (!inputNewTask.value == "") {
      let taskStoraged = {
        name: inputNewTask.value,
        id: Date.now()
      };
      let taskItem = document.createElement("li");
      taskItem.setAttribute("id", `${taskStoraged.id}`)
      taskItem.innerHTML=`<div class="task-item" title="Click and hold to check the task"">
                        <span>${taskStoraged.name}</span>
                        <div class="group-btn">
                        <button id="edit-btn" title="Click to edit the task" onclick="editTask(${taskStoraged.id})"><i class="far fa-edit"></i></button>
                        <button id="del-btn" title="Click to remove the task" onclick="delTask(${taskStoraged.id})"><i class="fas fa-trash"></i></button>
                        </div>                       
                        </div>`;
      taskList.appendChild(taskItem);
      inputNewTask.value = "";
      taskItemStored.push(taskStoraged);
      console.table(taskItemStored);     
  }     
    }
    //Function to remove task item
    function delTask(taskid) {
      let taskItem = document.getElementById(taskid);
        if (taskItem) {
          taskList.removeChild(taskItem);
          let delItemStored = taskItemStored.indexOf(taskid);
          console.log(delItemStored);
          taskItemStored.splice(delItemStored, 1);          
          console.table(taskItemStored);
        };
  
    };

   //Listeners to create a new Task 
  btnNewTask.addEventListener("click", setNewTask);
  inputNewTask.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      setNewTask();
      inputNewTask.value = "";
    }
});







