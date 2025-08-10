let todoArr = [];
let taskslist = document.getElementById("todo-tasks");
let totalTask = document.getElementById("total-task");
let button = document.getElementById("button");
let input = document.getElementById("input-box");

button.addEventListener("click", printToDos);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    printToDos();
  }
});

function printToDos() {
  let inputValue = input.value.trim();
  if (!inputValue) {
    alert("Fill the input to add task..");
    return;
  }

  todoArr.push(inputValue);
  input.value = "";

  let section = document.createElement("section");
  section.classList.add("section-each-task");

  let div = document.createElement("div");
  div.classList.add("tasklist-div");
  div.textContent = inputValue;

  let delbtn = document.createElement("button");
  delbtn.innerHTML = "Delete";
  delbtn.classList.add("del-task");

  delbtn.addEventListener("click", () => {
    taskslist.removeChild(section);
    todoArr.splice(todoArr.indexOf(inputValue), 1);
    updateTotal();
  });

  section.append(div);
  section.append(delbtn);
  taskslist.appendChild(section);

  updateTotal();
}

function updateTotal() {
  totalTask.innerHTML = `Total Pending Tasks : ${todoArr.length}`;
}

function clearAll() {
  todoArr = [];
  taskslist.innerHTML = "";
  totalTask.innerHTML = "";
}



