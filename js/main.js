//First step: To create the variables and to link with the html selectors:

const inputTodo = document.querySelector(".input-todo");
const btnTodo = document.querySelector(".btn-todo");
const listTodo = document.querySelector(".list-todo");

//Second Step: Create the Event Listener:

btnTodo.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();

  //create the div selector:
  const todoDiv = document.createElement("div");
  // add the class on the div selector:
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = "Hello Leila";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const btnCheck = document.createElement("button");
  btnCheck.innerHTML = '<i class="fas fa-check"></i>';
  btnCheck.classList.add("btn-check");
  todoDiv.appendChild(btnCheck);

  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
  btnDelete.classList.add("btn-delete");
  todoDiv.appendChild(btnDelete);

  listTodo.appendChild(todoDiv);
}
