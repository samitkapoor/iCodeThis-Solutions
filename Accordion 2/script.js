function onClick(e) {
  var id = this.event.target.id.split("-")[1];

  var actionButton = document.getElementById(this.event.target.id);
  console.log(actionButton);
  actionButton.classList.toggle("fa-plus");
  actionButton.classList.toggle("fa-minus");

  const div = document.getElementById(id);
  console.log(div.style.display);
  if (div.style.display == "") {
    div.style.display = "block";
  } else {
    div.style.display = "";
  }
}
