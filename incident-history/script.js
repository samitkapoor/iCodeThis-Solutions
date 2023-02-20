class Card {
  constructor(date, title, badge, description) {
    this.date = date;
    this.title = title;
    this.badge = badge;
    this.description = description;
  }
}

var cards = document.getElementById("cards");

function injectElements() {
  var data = [
    new Card(
      "Mar 8, 2020",
      "Users are unable to rearrange screens",
      "Resolved",
      "Our engineers have resolved the issue where users were unable to rearrange screens in V6 prototypes. Please reach out to our support team."
    ),
    new Card(
      "Mar 6, 2020",
      "Cloud V7 users may be experiencing some slowness or issues loading projects",
      "Monitoring",
      "Our engineers have resolved the issue where users were unable to rearrange screens in V6 prototypes. Please reach out to our support team."
    ),
    new Card(
      "Feb 28, 2020",
      "Some screens are not loading or loading intermittently for v7 users",
      "Investigating",
      "Our engineers have resolved the issue where users were unable to rearrange screens in V6 prototypes. Please reach out to our support team."
    ),
  ];

  var index = 0;

  console.log(cards);

  data.forEach((dataItem) => {
    const child = document.createElement("div");
    child.className = "card";
    child.innerHTML = `<div class="card-content">
          <div class="date">${dataItem.date}</div>
          <div class="card-title">
            <div class="title">
            ${
              dataItem.title
            } <span class="badge ${dataItem.badge.toLowerCase()}"> ${
      dataItem.badge
    }</span>
    </div>
          </div>
          <div class="card-description">
            ${dataItem.description}
          </div>
          <div class="card-button">
            <div class="text">Full Report</div>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>`;
    child.style.backgroundColor = "transparent";

    index = index + 1;

    cards.appendChild(child);

    if (index != data.length) {
      const link = document.createElement("div");
      link.className = "link";
      cards.appendChild(link);
    }

    console.log(cards);
  });
}
