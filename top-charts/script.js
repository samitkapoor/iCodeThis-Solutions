class Chart {
  constructor(imageUrl, songName, songArtist, streams) {
    this.imageUrl = imageUrl;
    this.songName = songName;
    this.songArtist = songArtist;
    this.streams = streams;
  }
}

var songs = [
  new Chart(
    "https://i1.sndcdn.com/artworks-000210211736-376hxo-t500x500.jpg",
    "A Lonely Night",
    "The Weeknd",
    "12,345,654"
  ),
  new Chart(
    "https://i1.sndcdn.com/artworks-000530750271-0wtuuj-t500x500.jpg",
    "In your Atmosphere",
    "John Mayer",
    "10,234,543"
  ),
  new Chart(
    "https://pbs.twimg.com/media/EeJWQLtXkAAJ6c0.jpg:large",
    "Cardigan",
    "Taylor Swift",
    "10,123,443"
  ),
  new Chart(
    "https://i.scdn.co/image/ab67616d0000b273988ede5e1276e758b5f9e577",
    "Location",
    "Khalid",
    "9,234,342"
  ),
  new Chart(
    "https://i1.sndcdn.com/artworks-YJvxchLo249j-0-t500x500.jpg",
    "The Color Violet",
    "Tory Lanez",
    "9,124,432"
  ),
  new Chart(
    "https://c-cl.cdn.smule.com/rs-s-sf-4/arr/a5/05/acb5fb39-4597-4f1b-bc1c-c1f4339307f3.jpg",
    "The Silence",
    "Manchester Orchestra",
    "8,984,234"
  ),
  new Chart(
    "https://i0.wp.com/thomasbleach.com/wp-content/uploads/2021/07/BQ_YSH_1.jpg?fit=1200%2C1200&ssl=1",
    "You Shaped Hole",
    "Baby Queen",
    "8,345,544"
  ),
  new Chart(
    "https://i.scdn.co/image/ab67616d0000b273106fa02aaa287ec63af85aae",
    "Cool Kids",
    "Echosmith",
    "7,645,763"
  ),
  new Chart(
    "https://i1.sndcdn.com/artworks-9X8KWEtnFTC3-0-t500x500.jpg",
    "All I Need",
    "Forester",
    "6,345,569"
  ),
  new Chart(
    "https://i1.sndcdn.com/artworks-VqjqgCCNb3Py-0-t500x500.jpg",
    "AMAZING",
    "Rex Orange County",
    "4,345,665"
  ),
];

function uploadCharts() {
  var charts = document.getElementById("charts");

  for (var i = 0; i < songs.length; i++) {
    var chart = `<div class="chart">
        <div class="leading">
        <div class="num-box">${i + 1}</div>
        <img
        src=${songs[i].imageUrl}
        alt=""
        />
        <div class="primary">
        <div class="name">${songs[i].songName}</div>
        <div class="artist">${songs[i].songArtist}</div>
        </div>
        </div>
        <div class="actions">
        <div class="streams">${songs[i].streams}</div>
        </div>
        </div>`;

    charts.insertAdjacentHTML("beforeend", chart);
  }
}
