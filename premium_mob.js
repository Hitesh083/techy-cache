//function for topnav responsive bar
function myFunction() {
  var x = document.getElementById("myTopbar");
  if(x.className == "topbar") {
    x.className += " responsive";
  }
  else {
    x.className = "topbar";
  }
}

//function for mobiles dropdown
function myMobile() {
  document.getElementById("mobiles").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn'))
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++)
    {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//function for earphones dropdown
function myEarphone() {
  document.getElementById("earphones").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn'))
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++)
    {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
