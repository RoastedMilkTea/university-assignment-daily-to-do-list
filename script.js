const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something! Cannot be blank.");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveTaskList();

}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTaskList();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTaskList();
    }

}, false);

function saveTaskList() {
    localStorage.setItem("data", listContainer.innerHTML);

}

function showTaskList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTaskList();