function initializeCountdown() {
  var months = document.getElementById("month-value");
  var days = document.getElementById("days-value");
  var hours = document.getElementById("hours-value");
  var minutes = document.getElementById("minutes-value");
  var seconds = document.getElementById("seconds-value");

  var daysInMonth = "31 28 31 30 31 30 31 31 30 31 30 31".split(" ");
  var endDate = "31 12 2023 11 59 59 pm".split(" ");
  var todayDate = moment().format("DD MM YYYY h mm ss a").split(" ");
  //   var todayDate = "26 02 2023 1 15 15 am".split(" ");

  var monthsLeft = endDate[1] - todayDate[1];
  months.innerHTML = monthsLeft;

  var daysLeft = daysInMonth[parseInt(todayDate[1] - 1)] - todayDate[0];
  days.innerHTML = daysLeft;

  var hoursLeft = endDate[3] - todayDate[3];
  if (todayDate[6] === "am") {
    hoursLeft += 12;
  }
  hours.innerHTML = hoursLeft;

  var minutesLeft = endDate[4] - todayDate[4];
  minutes.innerHTML = minutesLeft;

  var secondsLeft = endDate[5] - todayDate[5];
  seconds.innerHTML = secondsLeft;
}

setInterval(initializeCountdown, 1000);
