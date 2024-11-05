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
