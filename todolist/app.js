//Variables
let task = document.querySelector("#task");
let taskList = document.getElementById("list");
let addButton = document.getElementById("liveToastBtn");
let toastText = document.getElementById("toastText");

//main
function main() {
  loadTasks();
}

//add new task
function newElement() {
  let storageData = JSON.parse(localStorage.getItem("items"));
  if (task && task.value && task.value.trim()) {
    storageData.push(task.value);
    localStorage.setItem("items", JSON.stringify(storageData));
    listMaker(task.value);
    toastText.innerHTML = `${task.value} listeye eklenmiştir.`;
    $(".toast").toast("show");
    task.value = "";
  } else {
    toastText.innerHTML = "Giriş Alanı Boş Bırakılamaz";
    $(".toast").toast("show");
  }
}

//completed check
function completeItem() {  
  this.classList.toggle("checked");
}

//delete item
function deleteItem(e) {
  let storageData = JSON.parse(localStorage.getItem("items"));
  let text = e.path[1].firstChild.data;
  storageData.forEach((item, index) => {
    if (text === item) {
      storageData.splice(index, 1);
    }
  });
  localStorage.setItem("items", JSON.stringify(storageData));
  this.parentElement.remove(); //bunun yerine main() çalıştırıp sayfayı refresh edebiliriz.
  toastText.innerHTML = `${text} listeden çıkartılmıştır..`;
  $(".toast").toast("show");
  //main();
}

//making list in ul tag
let listMaker = (text) => {
  let li = document.createElement("LI");
  let inputText = document.createTextNode(text);
  let deleteBtn = document.createElement("span");
  deleteBtn.textContent = "x";
  deleteBtn.classList.add("close");
  deleteBtn.onclick = deleteItem;
  li.appendChild(inputText);
  li.appendChild(deleteBtn);
  li.onclick = completeItem;
  document.getElementById("list").appendChild(li);
};

//Page load
function loadTasks() {
  //taskList.innerHTML = ""; //Delete işleminde main() çalıştırıldığında bu satır kullanılmalı.
  let storageData = JSON.parse(localStorage.getItem("items"));
  if (storageData != null) {
    storageData.forEach((item) => {
      listMaker(item);
    });
  }
}

main();
