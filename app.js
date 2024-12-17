function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}

const timeIndicator = document.querySelector("#day_icon");

function revealIcon() {
  if (document.getElementById("day_icon").name == "moon-outline") {
    document.getElementById("day_icon").name = "sunny-outline";
  } else {
    document.getElementById("day_icon").name = "moon-outline";
  }
}
timeIndicator.addEventListener("click", revealIcon);
   // for modal 1
var popUp = document.getElementById("popup");

function openPopup() {
  popUp.classList.remove("hidden")
}

function closePopup() {
  popUp.classList.add("hidden")
}

 // for modal 2
 var popUp2 = document.getElementById("popup2");

function openPopup2() {
  popUp2.classList.remove("hidden")
}

function closePopup2() {
  popUp2.classList.add("hidden")
}

// for modal 3
var popUp3 = document.getElementById("popup3");

function openPopup3() {
  popUp3.classList.remove("hidden")
}

function closePopup3() {
  popUp3.classList.add("hidden")
}

//for  portfolio
 var active = document.getElementById("active")