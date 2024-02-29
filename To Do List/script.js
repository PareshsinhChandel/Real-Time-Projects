const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Function to add task
function AddTask() {
    if (inputBox.value === '') {
        alert('You must add your task!!!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value; 
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData(); 
    }
    inputBox.value = '';

    // Event listener for toggling task completion and removing task
    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle("checked");
        } else if (e.target.tagName === "SPAN") {
            e.target.parentNode.remove(); 
            saveData(); // Save data to localStorage after removing task
        }
    }, false);
}

// here we are storing data at localstorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to retrieve and display tasks from localStorage
function showTasks() {
    if (localStorage.getItem("data")) {
        listContainer.innerHTML = localStorage.getItem("data");
    }
}

showTasks(); // this function is to show task even after we reload the page
