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
      renderingCanzoni(data.data, artista);
    });
}

fetchBrani("eminem");
fetchBrani("queen");
fetchBrani("metallica");

function renderingCanzoni(canzoni, artista) {
  const artistaSezione = document.getElementById(`${artista}Section`);
  const artistaBox = document.getElementById(artista);

  //Rimuovi il conenuto precedente
  artistaSezione.innerHTML = "";
  for (let canzone of canzoni) {
    const col = document.createElement("div");
    col.className = "col mb-4";

    const canzoneCard = document.createElement("div");
    canzoneCard.className = "card h-100 shadow-sm";

    const canzoneImg = document.createElement("img");
    canzoneImg.className = "card-img-top";
    canzoneImg.src = canzone.album.cover_medium;
    canzoneImg.setAttribute("alt", canzone.titolo);
    canzoneCard.appendChild(canzoneImg);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitolo = document.createElement("h5");
    cardTitolo.className = "card-title";
    cardTitolo.innerText = canzone.titolo;
    cardBody.appendChild(cardTitolo);

    const cardTesto = document.createElement("p");
    cardTesto.className = "card-text";
    cardTesto.innerText = canzone.artista;
    cardBody.appendChild(cardTesto);

    const audio = document.createElement("audio");
    audio.setAttribute("controls", true);
    audio.src = canzone.preview;
    cardBody.appendChild(audio);

    canzoneCard.appendChild(cardBody);
    col.appendChild(canzoneCard);
    artistaSezione.appendChild(col);
  }

  //togli il d-none per mostrare la sezione
  artistaBox.classList.remove("d-none");
}
