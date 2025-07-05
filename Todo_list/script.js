let todoArr = [];
let taskslist = document.getElementById("todo-tasks");
let totalTask = document.getElementById("total-task");

function printToDos() {
  let inputValue = document.getElementById("input-box").value;
  todoArr.push(inputValue);
  document.getElementById("input-box").value = "";

  // console.log(todoArr)

  let div = document.createElement("div");
  div.classList.add("tasklist-div");

  todoArr.map((task, index) => {
    if (!inputValue) {
      alert("Fill the input to add task..");
    } else {
      div.textContent = task;
      taskslist.appendChild(div);
      totalTask.innerHTML= `Total Pending Tasks : ${todoArr.length}`;
    }
  });
}
function clearAll() {
  todoArr.splice(0, todoArr.length);
  taskslist.innerHTML = "";
  totalTask.innerHTML = ""
}
console.log(todoArr)
