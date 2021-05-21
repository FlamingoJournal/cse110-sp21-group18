let modal = document.getElementById("modalWindow"); //get modal window
let modalBtn = document.getElementById("modalButton"); //get open modal button
let closeBtn = document.getElementsByClassName("closeButton")[0]; //get close modal button

modalBtn.addEventListener('click', openModal); //listen for open click
closeBtn.addEventListener('click', closeModal); //listen for close click
window.addEventListener('click', outsideClick); //listen for outside click

//Function to open modal window
function openModal() {
    modal.style.display = 'block';
}

//Function to close modal window
function closeModal() {
    modal.style.display = 'none';
}

//Function to close modal window when clicking outside of window
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}