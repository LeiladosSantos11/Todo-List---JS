//First step: To create the variables and to link with the html selectors:

const inputTodo = document.querySelector(".input-todo");
const btnTodo = document.querySelector(".btn-todo");
const listTodo = document.querySelector(".listTodo");

//Second Step: Create the Event Listener:

btnTodo.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();

  //create the div selector:
  const divTodo = document.createElement("div");
  // add the class on the div selector:
  divTodo.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = "hello";
  newTodo.classList.add("todo-item");
  divTodo.appendChild(newTodo);

  const btnCheck = document.createElement("button");
  btnCheck.innerHTML = '<i class="fas fa-check"></i>';
  btnCheck.classList.add("btn-check");
  divTodo.appendChild(btnCheck);

  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
  btnDelete.classList.add("btn-delete");
  divTodo.appendChild(btnDelete);

  listTodo.appendChild(divTodo);
}
