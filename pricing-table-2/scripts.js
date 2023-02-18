const monthly = document.getElementById("monthly");
const monthlyButton = document.getElementById("monthly-button");
const yearly = document.getElementById("yearly");
const yearlyButton = document.getElementById("yearly-button");

yearlyButton.style.backgroundColor = "transparent";
yearlyButton.style.color = "black";
monthlyButton.style.backgroundColor = "rgb(23, 25, 34)";
monthlyButton.style.color = "rgb(179, 180, 183)";

function selectAction() {
  monthly.classList.toggle("un-selected");
  yearly.classList.toggle("un-selected");

  if (monthly.classList.contains("un-selected")) {
    monthlyButton.style.backgroundColor = "transparent";
    monthlyButton.style.color = "black";
    yearlyButton.style.backgroundColor = "rgb(23, 25, 34)";
    yearlyButton.style.color = "rgb(179, 180, 183)";
  }

  if (yearly.classList.contains("un-selected")) {
    yearlyButton.style.backgroundColor = "transparent";
    yearlyButton.style.color = "black";
    monthlyButton.style.backgroundColor = "rgb(23, 25, 34)";
    monthlyButton.style.color = "rgb(179, 180, 183)";
  }
}
