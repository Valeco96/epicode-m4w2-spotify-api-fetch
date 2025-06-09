console.log("Spotify premium");

// function fetchEminemAlbums() {
//   fetch("https://striveschool-api.herokuapp.com/search?q=eminem")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       const songs = data.data;
//       const eminemSection = document.getElementById("eminemSection");
//       const eminemBox = document.getElementById("eminem");

//       //elimina il d-none per mostrare la sezione
//       eminemBox.classList.remove("d-none");

//       //svuotalo del contenuto precedente
//       eminemSection.innerHTML = "";

//       songs.forEach((song) => {
//         const col = document.createElement("div");
//         col.className = "col mb-4";

//         col.innerHTML = `<div class = "card h=100 shadow-sm">
//         <img src = "${song.album.cover_medium}" class = "card-img-top" alt = "${song.title}">
//         <div class = "card-body">
//         <h5 class = "card-title">${song.title}</h5>
//         <p class = "card-text">${song.artist.name}</p>
//         <audio controls src = "${song.preview}"></audio>
//         </div>
//         </div>`;
//       });
//     });
// }

function fetchBrani(artista) {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artista)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

fetchBrani("eminem");
