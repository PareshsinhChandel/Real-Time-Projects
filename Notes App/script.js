document.addEventListener("DOMContentLoaded", function() {
    const notesContainer = document.querySelector('.notes-container');
    const createBtn = document.querySelector('.btn');
    let notes;

    showNotes();

    function showNotes() {
        notesContainer.innerHTML = localStorage.getItem("notes");
    }

    function updateStorage() {
        localStorage.setItem("notes", notesContainer.innerHTML);
    }

    createBtn.addEventListener('click', () => {
        let inputBox = document.createElement('div');
        inputBox.className = "input-box";
        inputBox.setAttribute('contenteditable', "true");
        inputBox.innerHTML = '<img src="images/delete.png" alt="Delete">';
        notesContainer.appendChild(inputBox);
        updateStorage();
    });

    notesContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
            updateStorage();
        }
    });

    notesContainer.addEventListener("input", function() {
        updateStorage();
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    });
});
