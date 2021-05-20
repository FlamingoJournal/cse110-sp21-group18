let main = document.querySelector('main');
first_entry = document.querySelector(".entry");
first_entry.addEventListener('input', autoScroll);
first_entry.addEventListener('keypress', checkEnterKey);
first_entry.addEventListener('blur', checkBlur);

// increases textarea height automatically
function autoScroll() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

// prevents enter from creating a new line, creates new entry instead
function checkEnterKey(e) {
    if (e.key == "Enter") {
        e.preventDefault(); //  stop new line
        if (this.value && !this.nextElementSibling) { //  something is in the textarea, and we're in the last textarea
            addNewEntry();
            this.nextElementSibling.focus();
        }
    }   
}

// Deletes current textarea if it's empty and backspace/delete is pressed
function checkDelete(e) {
    if ((e.key == "Backspace" || e.key == "Delete") && !this.value) {
        e.preventDefault();
        this.previousElementSibling.focus();
        this.remove();
    }
}

// add a new textarea if the user clicks off of the latest textarea and there's stuff in it 
function checkBlur() {
    if (this.value && !this.nextElementSibling) {
        addNewEntry();
    }
}

// create a new text area, give it the proper class, style, and event listeners, then add it to the document
function addNewEntry() {
    let new_entry = document.createElement('textarea');
    new_entry.className = "entry";
    new_entry.cols = 50;
    new_entry.addEventListener('input', autoScroll);
    new_entry.addEventListener('keypress', checkEnterKey);
    new_entry.addEventListener('keydown', checkDelete);
    new_entry.addEventListener('blur', checkBlur);
    main.appendChild(new_entry);
}


// Save all entries on button click
let save_button = document.getElementById("user-save");
save_button.addEventListener('click', saveInput);

// Go through the textareas and save their values into localStorage
function saveInput(){
    let entries = document.getElementsByClassName("entry");
    console.log(entries);
    let data = [];
    for (e of entries) {
        data.push(e.value);
    }
    localStorage.setItem("data", JSON.stringify(data));
}

// When page loads, retrieve localStorage info and create textareas accordingly
window.addEventListener('load', fetchData);
function fetchData(){
    if (localStorage.getItem("data")){
        let data = JSON.parse(localStorage.getItem("data"));
        first_entry.value = data[0];
        first_entry.style.height = first_entry.scrollHeight + 'px';
        for (let i = 1; i < data.length; i++){
            addNewEntry();
            main.lastElementChild.value=data[i];
            main.lastElementChild.style.height = main.lastElementChild.scrollHeight + 'px';
        }
    }
}

// Clear localStorage and all textareas except the first one if clear button is clicked
let clear_button = document.getElementById("user-clear");
clear_button.addEventListener('click', () => {
    localStorage.clear();
    while (main.childElementCount > 3) {
        main.removeChild(main.lastElementChild);
        first_entry.value="";
    }
});