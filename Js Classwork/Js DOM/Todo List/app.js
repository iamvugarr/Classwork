const input = document.getElementById("todo-create");
const button = document.getElementById("btn");
const list = document.getElementById("ul");

const editList = document.getElementById("edit-List");
const editInput = document.getElementById("edit-input");
const submit = document.getElementById("submit-button");


button.addEventListener("click", () => {
  let arr = [JSON.parse(localStorage.getItem('name'))]
  
  let inputValue = input.value
  let todo = {
    name: inputValue
  }
  
  arr.push(todo)
  
  localStorage.setItem('name', JSON.stringify(arr))
  
  // console.log(getValue);

  const liElem = document.createElement("li");
  const deleteIcon = document.createElement("i");
  const editIcon = document.createElement("i");
  
  deleteIcon.className = "fa fa-trash";
  deleteIcon.style.cursor = "pointer";
  
  editIcon.className = "fas fa-edit";
  editIcon.style.cursor = "pointer";

  arr.forEach((elem) => console.log(elem.name))

  if (input.value != "") {
    liElem.innerText = arr.forEach(elem => elem.name);
    liElem.appendChild(editIcon);
    liElem.appendChild(deleteIcon);
    list.appendChild(liElem);
    input.value = "";
    
  }

  deleteIcon.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    
  });

  editIcon.addEventListener("click", () => {
    editList.classList.toggle("active");
    editInput.value = liElem.innerText;
  });

  submit.addEventListener('click', (e) => {
    e.preventDefault()
    liElem.innerText = editInput.value
  })
});

