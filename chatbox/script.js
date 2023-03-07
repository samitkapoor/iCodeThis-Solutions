const chatBtnIcon = document.getElementById("chat-btn-icon");
const chatBtn = document.getElementById("chat-btn");
const chatBox = document.getElementById("chat-box");

chatBtn.addEventListener("click", () => {
  chatBtnIcon.classList.toggle("fa-regular");
  chatBtnIcon.classList.toggle("fa-comments");
  chatBtnIcon.classList.toggle("fa-solid");
  chatBtnIcon.classList.toggle("fa-xmark");
  chatBox.classList.toggle("hide");
});
