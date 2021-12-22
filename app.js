console.log("this is notes");
showNotes();

//If user adds a note -- send to local storage
let addBtn = document.getElementById('addBtn');


addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) { notesObj = []; }
    else { notesObj = JSON.parse(notes) }

    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    

    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

// displaying saved notes from local storage

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) { notesObj = []; }
    else { notesObj = JSON.parse(notes); }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `   
         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body1">
            <h5 class="card-title">Notes ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>  
    </div>
        `; //above html is a container added using js insted of html to display saved notes
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) { notesElm.innerHTML = html; }
    else { notesElm.innerHTML = `Nothing to show! Use "Save notes" to add notes`; }
}


// delete notes function
// to do this -- above changes to be made--- button on click=deleteNote(this.id)-- giving index as id-- id="${index}"

function deleteNote(index) {
    console.log("i am deleting");

    let notes = localStorage.getItem('notes');
    if (notes == null) { notesObj = []; }
    else { notesObj = JSON.parse(notes); }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}

// search box

let search= document.getElementById('searchTxt');
search.addEventListener('input', function(){

    let inputVal= search.value;
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element) {
        let cardTxt= element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal))
        {element.style.display= 'block';}
        else
        {element.style.display= 'none';}
    })
    
})

