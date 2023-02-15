function copyColorToast() {
  const toast = document.getElementById("toast");

  toast.style.opacity = 1;

  setInterval(() => {
    toast.style.opacity = 0;
  }, 2000);
}
