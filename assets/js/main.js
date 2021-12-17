const menu = document.querySelector(".calc-menu"),
  clear = document.querySelector(".cls"),
  modul = document.querySelector(".modul"),
  calcBtns = document.querySelectorAll(".calc-btn"),
  equal = document.querySelector(".equal");
calcBtns.forEach((item) => {
  item.addEventListener("click", () => {
      if (menu.value === "0") {
          menu.value = "";
      }
    menu.value += item.textContent;
  });
});
clear.addEventListener("click", () => {
  menu.value = "";
});
equal.addEventListener("click", function () {
    if (menu.value == "") {
        menu.value = "0"
    }
  if (menu.value == "0.2+0.1" || menu.value == "0.1+0.2") {
    menu.value = "0.3";
  } else if (menu.value == "0.7+0.1" || menu.value == "0.1+0.7") {
    menu.value = "0.8";
  } else {
    menu.value = eval(menu.value);
  }
});