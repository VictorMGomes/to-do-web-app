//get elements
let  inputNewTask = document.querySelector("#add-task");
let  btnNewTask = document.querySelector("#add-btn");
let taskList = document.querySelector("#task-list");


const taskItemStored = [0, ];

//Function to create a new task
  function setNewTask() {
    if (inputNewTask.value != null && inputNewTask.value != 0) {
      let taskStoraged = {
        name: inputNewTask.value,
        id: Date.now(),
        tStatus: true
      };
      let taskItem = document.createElement("li");
      taskItem.setAttribute("id", `${taskStoraged.id}`);
      taskItem.innerHTML=`<div class="task-item" title="Double click to check the task"" ondblclick="checkTask(${taskStoraged.id})">
                        <span>${taskStoraged.name}</span>
                        <div class="group-btn">
                        <button class="edit-btn" title="Click to edit the task" onclick="editTask(${taskStoraged.id})"><i class="far fa-edit"></i></button>
                        <button class="del-btn" title="Click to remove the task" onclick="delTask(${taskStoraged.id})"><i class="fas fa-trash"></i></button>
                        </div>                       
                        </div>`;
      taskList.appendChild(taskItem);
      inputNewTask.value = "";
      taskItemStored.push(taskStoraged);
      console.table(taskItemStored);     
  } else {
    inputNewTask.value = "";
  }    
    };

//Function to search item Stored
function searhTaskItemStored(arrItems, value) {
  for (let index = 0; index < arrItems.length; index++) {
    if(arrItems[index].id === value ) {
      return index;
    };    
  };  
}; 

//Function to check task item
function checkTask(taskid) {  
  let taskItem = document.getElementById(taskid);
  if (taskItem) {
    let index = searhTaskItemStored(taskItemStored, taskid);
    if (index) {
      let taskStoraged = taskItemStored[index];
      if (taskStoraged.tStatus == true) {
        taskItem.firstChild.style.textDecoration = "line-through";
        taskItem.firstChild.style.backgroundColor = "rgb(136 126 13)";
        taskItem.firstChild.style.color = "black";
        taskStoraged.tStatus = false;
        console.log(taskStoraged.tStatus)
        taskItemStored.splice(index, 1); 
        taskItemStored.push(taskStoraged);
        console.table(taskItemStored);          
      } else if (taskStoraged.tStatus == false){
        taskItem.firstChild.style.textDecoration = "";
        taskItem.firstChild.style.backgroundColor = "rgb(98 54 134)";
        taskItem.firstChild.style.color = "white";
        taskStoraged.tStatus = true;
        console.log(taskStoraged.tStatus);
        taskItemStored.splice(index, 1); 
        taskItemStored.push(taskStoraged);
        console.table(taskItemStored);
      };          
    };        
  };
};

//Function to edit task
function editTask(taskid) {
  let taskItem = document.getElementById(taskid);
    if (taskItem) {
      let index = searhTaskItemStored(taskItemStored, taskid);
      if (index) {
      let newText = prompt("New Text? ");
        if (newText != null && newText != 0) {
          let taskStoraged = {
            name: newText,
            id: taskid,
            tStatus: true
          };
          taskItem.innerHTML = `<div class="task-item" title="Double click to check the task"" ondblclick="checkTask(${taskStoraged.id})">
        <span>${taskStoraged.name}</span>
        <div class="group-btn">
        <button class="edit-btn" title="Click to edit the task" onclick="editTask(${taskStoraged.id})"><i class="far fa-edit"></i></button>
        <button class="del-btn" title="Click to remove the task" onclick="delTask(${taskStoraged.id})"><i class="fas fa-trash"></i></button>
        </div>                       
        </div>`;
          taskItemStored.splice(index, 1);
          taskItemStored.push(taskStoraged);             
        };                     
      };      
    };
    console.table(taskItemStored);
};

//Function to remove task item
 function delTask(taskid) {
  let taskItem = document.getElementById(taskid);
    if (taskItem) {
      taskList.removeChild(taskItem);
      let index = searhTaskItemStored(taskItemStored, taskid);
      if (index) {
        taskItemStored.splice(index, 1);                
      };      
    };
    console.table(taskItemStored);
};

//Listeners to create a new Task 
  btnNewTask.addEventListener("click", setNewTask);
  inputNewTask.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
      setNewTask();
    };
});
