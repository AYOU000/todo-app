function addtasks() {
  const Line = document.getElementById("line");
  const Input = document.getElementById("taskInput");
  const taketext = Input.value.trim();
  if (taketext !== "") {
    Line.textContent = "";
    const ul = document.getElementById("tasks");
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taketext;
    //div  check buttom
    const checkDiv = document.createElement("div");
    checkDiv.classList.add("check");
    // check buttom
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check");
    checkBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    checkBtn.onclick = () => toggleDone(checkBtn, span);
    // div edit buttom
    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("actions");
    // edit buttom
    const edtBtn = document.createElement("button");
    edtBtn.classList.add("edit");
    edtBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    edtBtn.onclick = () => edtTask(span);
    // delet buttom
    const delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delBtn.onclick = () => removeTask(li);

    checkDiv.appendChild(checkBtn);
    checkDiv.appendChild(span);
    actionsDiv.appendChild(delBtn);
    actionsDiv.appendChild(edtBtn);
    li.appendChild(checkDiv);
    li.appendChild(actionsDiv);
    ul.appendChild(li);

    Input.value = "";
  } else {
    Line.textContent = "please enter your task";
  }
}
function edtTask(span) {
  const newTask = prompt("Edtit your task:", span.textContent);

  if (newTask !== null && newTask.trim() !== "") {
    span.textContent = newTask.trim();
  }
}
function removeTask(li) {
  const ul = document.getElementById("tasks");

  ul.removeChild(li);
}
function toggleDone(checkBtn, span) 
{
    span.classList.toggle("done");
    const icon = checkBtn.querySelector("i");
  if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  }
}
