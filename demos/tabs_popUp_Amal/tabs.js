function openCity(evt, cityName) {
  // Declare all variables
  let i = 0;

  // Get all elements with class="tabcontent" and hide them
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  let tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function addDay(evt) {
  let ul = document.getElementById('daily_ul');
  let li = document.createElement('li');

  let aN = document.createElement('a');
  aN.href = "https://www.codegrepper.com/code-examples/javascript/how+to+append+li+to+ul+in+javascript";
  aN.appendChild(document.createTextNode('New Day'));
  
  li.appendChild(aN);
  ul.appendChild(li);

}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.ddlinks')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
