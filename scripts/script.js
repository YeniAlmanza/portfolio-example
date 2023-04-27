/*
  Student Name: Yeni Almanza
  Date: 4/25/2023
  File Name: script.js
*/
//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
        var menuicon = document.getElementById("icon");
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
                menuicon.style.color = "#483248";
        } else {
            navlinks.style.display = "block";
                menuicon.style.color = "#EAE7FA";
        }
}
