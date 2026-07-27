// Get the menu button
const menuBtn = document.getElementById("menuBtn");

// Get the navigation links
const navLinks = document.getElementById("navLinks");


// When the menu button is clicked
menuBtn.addEventListener("click", function () {

    // Show or hide the navigation links
    navLinks.classList.toggle("show");

});