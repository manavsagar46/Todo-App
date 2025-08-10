/*!
let todoArr = []; // creating empty array to store tasks
// accessing html elements by DOM
let taskslist = document.getElementById("todo-tasks");
let totalTask = document.getElementById("total-task");
let button = document.getElementById("button");
let input = document.getElementById("input-box");

// button onclick event to invoke printToDos()
button.addEventListener("click",() => {
  printToDos()
})

// keydown event on input field for invoke printToDos()
input.addEventListener("keydown",(event) => {
  if(event.key === "Enter"){
    printToDos()
  }
})

// Displaying input tasks 
function printToDos() {
  let inputValue = input.value; // accessing input field value
  todoArr.push(inputValue); // pushing each task into todoArr[]
  input.value = ""; // making input field empty after pushing
  // console.log(todoArr)

  let section = document.createElement("section");
  section.classList.add("section-each-task"); // adding class to div


  let div = document.createElement("div"); // creating div for each input
  div.classList.add("tasklist-div"); // adding class to div
  
  let delbtn = document.createElement("button"); // creating delete button for each input
  
  todoArr.map((task, index) => {
    if (!inputValue) {
      alert("Fill the input to add task.."); // alert if input is empty
    } else {
      div.textContent = task; // adding each task to div as content
      // section.setAttribute("id",index);
      section.append(div) // appending div into section
      section.append(delbtn.addEventListener("click", index => {
        todoArr.splice(index, 1)
      })) // appending delete button into section
      taskslist.appendChild(section); // appending section to tasklist(article)
      totalTask.innerHTML= `Total Pending Tasks : ${todoArr.length}`; // counting and displaying total no. of tasks.
    }
  });
  console.log(todoArr.length)
  console.log("Add Task : ",todoArr)
  
  delbtn.innerHTML = "Delete"
  delbtn.classList.add("del-task"); // adding class to delete button
  delbtn.addEventListener("click",() => {
    section.remove();
    if(todoArr.length == 1){
      todoArr = []; // making todoArr empty
    }else{
      todoArr.splice(section.id, 1); // removing element form index
    }
    console.log("del : ",todoArr)
    totalTask.innerHTML= `Total Pending Tasks : ${todoArr.length}`; // counting and displaying total no. of tasks.
    console.log(todoArr)
  })
}

// Deleting All tasks onclick of clearAll btn
function clearAll() {
  todoArr.splice(0, todoArr.length); // making todoArr empty
  taskslist.innerHTML = ""; // making tasklist(article) empty
  totalTask.innerHTML = "" // making totalTask(p) empty
}
*/