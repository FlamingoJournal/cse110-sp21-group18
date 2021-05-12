function classSwitch(id, oldClass, newClass){
    let element = id;
    element.classList.remove(oldClass);
    element.classList.add(newClass);
}

document.getElementById("menu").onclick = function(){
    let sidebar = document.getElementById("sidebar");
    let img = document.getElementById("calendar");
    let font = document.getElementById("font");
    let menu = document.getElementById("menu");
    let log = document.getElementById("log");

    if(sidebar.className === "sidebaron"){
        this.value = ">";
        img.src = "";
        font.src = "";
        classSwitch(sidebar, "sidebaron", "sidebaroff");
        classSwitch(menu, "collapse", "open");
        classSwitch(log, "logSideon", "logSideoff");
    }

    else{
        this.value = "<";
        img.src = "calendar.png";
        font.src = "Font.png";
        classSwitch(sidebar, "sidebaroff", "sidebaron");
        classSwitch(menu, "open", "collapse");
        classSwitch(log, "logSideoff", "logSideon");
    }
}