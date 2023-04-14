let percentages = [27.5, 43.5, 15.5, 12.5, 5.5];

for (var i = 0; i < percentages.length; i++) {
  var percentageId = "percentage-" + (i + 1).toString();
  var barId = "bar-" + (i + 1).toString();

  var percentageEle = document.getElementById(percentageId);
  var barEle = document.getElementById(barId);

  percentageEle.innerHTML = `${percentages[i]}`;
  var height = (percentages[i] / 100) * 120;
  barEle.style.height = `${height}px`;
}
