//? Selectors
const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.getElementById("lang-list");

const newUl = document.createElement("ol");
langList.appendChild(newUl);

//? addBtn event handler

addBtn.addEventListener("click", () => {
  if (!langInput.value) {
    alert("Please enter a task");
  } else {
    newUl.innerHTML += `<li> ${langInput.value} </li>`;

    langInput.value = "";
  }
  langInput.focus();
});

//? deleteBtn event handler
deleteBtn.addEventListener("click", () => {
  newUl.childElementCount > 0
    ? newUl.removeChild(newUl.lastElementChild)
    : alert("There is no item to delete");
});

//? enter key and del event handler
langInput.addEventListener("keydown", (event) => {
  //   console.log(event);
  //   console.log(event.target);
  //   console.log("Key Code:" + event.keyCode);
  //   console.log("only code:" + event.code);
  // keyCode aski noyu code ismini
  if (event.keyCode === 13) {
    addBtn.click();
  }
  if (event.code === "Delete") {
    deleteBtn.click();
  }
  //   if(event.keyCode===46){
  //     deleteBtn.click(); // Alternatif
  //   }
});
const redJS = document.createElement("p");
redJS.className = "red-par";
