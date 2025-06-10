console.log("Spotify premium");

const found = document.getElementById("found");
const searchSection = document.getElementById("searchSection");
const searchInput = document.getElementById("searchField");

function search() {
  //input deve prendere il valore che l'utente sta cercando
  let elementoCercato = searchInput.value;
  console.log(elementoCercato);
  //passa la fetch, cosí chiama in automatico il parametro
  fetchBrani(elementoCercato, true);

  //rendi le sezioni d-none
  let eminemSection = document.getElementById("eminem");
  let queenSection = document.getElementById("queen");
  let metallicaSection = document.getElementById("metallica");

  eminemSection.classList = "d-none";
  queenSection.classList = "d-none";
  metallicaSection.classList = "d-none";
}

function fetchBrani(artista, search = false) {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artista)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderingCanzoni(data.data, artista, (search = false));
    });
}

fetchBrani("eminem");
fetchBrani("queen");
fetchBrani("metallica");

function renderingCanzoni(canzoni, artista, search = false) {
  let artistaSezione = document.getElementById(`${artista}Section`);
  let artistaBox = document.getElementById(artista);

  if (search) {
    artistaSezione = searchSection;
    artistaBox = found;
  }

  //Rimuovi il conenuto precedente
  artistaSezione.innerHTML = "";
  for (let canzone of canzoni) {
    const col = document.createElement("div");
    col.className = "col mb-4";

    const canzoneCard = document.createElement("div");
    canzoneCard.className = "card h-100 shadow-sm";

    const canzoneImg = document.createElement("img");
    canzoneImg.className = "card-img-top img-fluid";
    canzoneImg.src = canzone.album.cover_medium;
    canzoneImg.setAttribute("alt", canzone.titolo);
    canzoneCard.appendChild(canzoneImg);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-dark";

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
    audio.className = "w-100";
    audio.src = canzone.preview;
    cardBody.appendChild(audio);

    canzoneCard.appendChild(cardBody);
    col.appendChild(canzoneCard);
    artistaSezione.appendChild(col);
  }

  //togli il d-none per mostrare la sezione
  artistaBox.classList.remove("d-none");
}
