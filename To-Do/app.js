let taskList = [];
let todoDate = "";
let idCount = 0;

function addTask() {
  const taskId = idCount++;

  //new Task
  let newTask = document.querySelector("#taskName");
  let newDate = document.querySelector("#date");
  taskList.push([taskId, newTask.value, newDate.value]);

  showTaskList(newTask, newDate);

  newTask.value = "";
  newDate.value = "";
}

function deleteTask(id) {
  taskList = taskList.filter((t) => {
    if (t[0] !== id) {
      console.log("id: " + id + " current value: " + t[0]);
      return t;
    }
  });

  showTaskList();
}

function showTaskList() {
  let todoTask = "";
  for (let i = 0; i < taskList.length; i++) {
    const id = taskList[i][0];

    const task = `<div class="p-2 max-w-screen-md flex justify-center mx-auto mt-5 border-2 border-black rounded-md">
            <p class="p-3 text-2xl text-center mr-5 flex-1">${taskList[i][1]}</p>
            <p class="p-3 text-2xl text-center mr-5 flex-1">${taskList[i][2]}</p>
            <button onclick="deleteTask(${id})" id="delete-btn" class="w-[6rem] p-3 text-xl text-center rounded-md ml-5 bg-red-500 text-white hover:bg-red-700">Delete</button>
        </div>`;

    todoTask += task;
  }

  document.querySelector("#allTasks").innerHTML = todoTask;
}
