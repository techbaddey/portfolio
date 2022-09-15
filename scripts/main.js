var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sideNav.style.top = "-150%";

menuBtn.onclick = function () {
  if (sideNav.style.top == "-150%") {
    sideNav.style.top = "0";
    menu.src = "img/xmark-solid.png";
  } else {
    sideNav.style.top = "-150%";
    menu.src = "img/bars-solid.png";
  }
};

var navLink = document.getElementById("navLink1");
navLink.onclick = function () {
  if (sideNav.style.top == "0") {
    sideNav.style.display = "none";
    menu.src = "img/xmark-solid.png";
  } else {
    sideNav.style.top = "-95%";
    menu.src = "img/bars-solid.png";
  }
};

var navLink = document.getElementById("navLink2");
navLink.onclick = function () {
  if (sideNav.style.top == "0") {
    sideNav.style.display = "none";
    menu.src = "img/xmark-solid.png";
  } else {
    sideNav.style.top = "-95%";
    menu.src = "img/bars-solid.png";
  }
};

var navLink = document.getElementById("navLink3");
navLink.onclick = function () {
  if (sideNav.style.top == "0") {
    sideNav.style.display = "none";
    menu.src = "img/xmark-solid.png";
  } else {
    sideNav.style.top = "-95%";
    menu.src = "img/bars-solid.png";
  }
};

var navLink = document.getElementById("navLink6");
navLink.onclick = function () {
  if (sideNav.style.top == "0") {
    sideNav.style.display = "none";
    menu.src = "img/xmark-solid.png";
  } else {
    sideNav.style.top = "-95%";
    menu.src = "img/bars-solid.png";
  }
};
