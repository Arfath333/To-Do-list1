
const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNoteButton');
const notesContainer = document.getElementById('notesContainer');


let notes = JSON.parse(localStorage.getItem('notes')) || [];


function renderNotes() {
    notesContainer.innerHTML= '';
    notes.forEach((note, index)=>{
        const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.innerHTML=`
            <span class="note-content" contenteditable="false">${note}</span>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
            `;
            notesContainer.appendChild(noteElement);

            noteElement.querySelector('.deleteBtn').addEventListener('click', () => {
                deleteNote(index)
            })

    })
}

addNoteButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    if(noteText){
        notes.push(noteText);
        saveNotes();
        renderNotes();
        noteInput.value='';
    }
})

function deleteNote(index){
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}



function saveNotes(){
    localStorage.setItem('notes', JSON.stringify(notes));
}