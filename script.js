/* Search Bar */

const searchBar = document.getElementById("searchBox");

searchBar.onclick = function (event) {
  searchBar.style.borderColor = "#fff";
  event.stopPropagation();
};

document.onclick = function () {
  searchBar.style.borderColor = "transparent";
};

/* Side Menu */

/* Open Menu */
const sideMenu = document.getElementById("menuBtn");
const sideMenuDiv = document.getElementById("sideMenuDiv");
const sideMenuCancel = document.getElementById("sideMenuCancel");

sideMenu.onclick = function () {
  sideMenuDiv.style.left = "0%";
};

sideMenuCancel.onclick = function () {
  sideMenuDiv.style.left = "100%";
};
/* Close Menu */
