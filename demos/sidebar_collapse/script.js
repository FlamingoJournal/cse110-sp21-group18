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
        sidebar.className = "sidebaroff";
        menu.className = "open";
        log.className = "logSideoff";
    }

    else{
        this.value = "<";
        img.src = "calendar.png";
        font.src = "Font.png";
        sidebar.className = "sidebaron";
        menu.className = "collapse";
        log.className = "logSideon";
    }
}