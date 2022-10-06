const menuIcon = document.getElementById("hamburgerIcon");
const navigationMenu = document.getElementById("ul");
const hamburgerSrc = "./images/icon-hamburger.svg";
const closeSrc = "./images/icon-close.svg";

// managing the navigation menu state ;
menuIcon.addEventListener("click", () => {
  if (menuIcon.attributes.src.nodeValue == hamburgerSrc) {
    menuIcon.attributes.src.nodeValue = closeSrc;
    navigationMenu.style.display = "block";
  } else {
    menuIcon.attributes.src.nodeValue = hamburgerSrc;
    navigationMenu.style.display = "none";
  }
});
