let save_button = document.getElementById("user-save");
save_button.addEventListener('click', saveInput);

function saveInput(){
    let user_input = document.getElementById("user-input");
    let arr;
    if (localStorage.getItem("data") === null) {
        // nothing saved yet
        arr = [user_input.value]; // single element array
    }
    else {
        arr = JSON.parse(localStorage.getItem("data")); // turn JSON string into array
        arr.push(user_input.value);
    }
    localStorage.setItem("data", JSON.stringify(arr)); // turn array back into JSON string
}

let fetch_button = document.getElementById("user-fetch");
fetch_button.addEventListener('click', fetchData);

function fetchData(){
    let display = document.getElementById("display");
    if (localStorage.getItem("data") === null){
        display.placeholder = "No data yet..";
    }
    else {
        let data = JSON.parse(localStorage.getItem("data"));
        for (let i = 0; i < data.length; i++){
            display.value += data[i] + "\n";
        }
    }
    
}

let clear_button = document.getElementById("user-clear");
clear_button.addEventListener('click', () => {
    localStorage.clear();
    display.value = "";
    display.placeholder = "All saved data cleared";
});

