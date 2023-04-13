var items = document.querySelectorAll(".items");

console.log(items);

items.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("item");
    let id = item.id;
    let labelId = "label" + id;
    let iconId = "icon" + id;

    var label = document.getElementById(labelId);
    var icon = document.getElementById(iconId);

    label.classList.toggle("item");
    label.classList.toggle("check");

    icon.classList.toggle("fa-circle-check");
    icon.classList.toggle("tick");
    icon.classList.toggle("fa-circle");
    icon.classList.toggle("clickable");
  });
});
