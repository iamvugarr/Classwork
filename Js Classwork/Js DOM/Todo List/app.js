const input = document.getElementById("todo-create");
const button = document.getElementById("btn");
const list = document.getElementById("ul");


button.addEventListener("click", () => {
  const liElem = document.createElement("li");
  const deleteIcon = document.createElement("i");
  const editIcon = document.createElement("i");

  deleteIcon.className = "fa fa-trash";
  deleteIcon.style.cursor = "pointer";

  
  if (input.value != "") {
    liElem.innerText = input.value;
    liElem.appendChild(editIcon);
    liElem.appendChild(deleteIcon);
    list.appendChild(liElem);
    input.value = "";
    
  }

  deleteIcon.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    
  });
  
});






