showNotes();
let addBtn = document.getElementById("btn");
var obj;
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("txt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        obj = [];
    } else {
        obj = JSON.parse(notes);
    }
    obj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(obj));
    addTxt.value = "";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        obj = [];
    } else {
        obj = JSON.parse(notes);
    }
    let html = "";
    obj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (obj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}


function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        obj = [];
    } else {
        obj = JSON.parse(notes);
    }

    obj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(obj));
    showNotes();
}
