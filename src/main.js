import { sortAZ, sortZA, people, filtrar, filtrarAnimal, computeGender, filterMovies } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const cardCharacters = document.getElementById("cardCharacters")
const card = document.getElementById("card")
const characters = people(data.films)
const calculation = document.getElementById("calculation")

function printMovies(data) {

  document.getElementById("card").innerHTML = data.map((films) => `
  <section class="container">
      <div class="card-container">
      <div class="card">
          <figure class="front">
            <img src="${films.poster}" class"img"> 
            <div class="text">
            <h3 class="title">${films.title}</h3>
            <h7 class="ano"><i>Release date: ${films.release_date} </i></h7>
            </figure> 
        <figure class="back">
            <ul class="cardInfos">
           <li><strong>Score:</strong> ${films.rt_score}</li>
            <li><strong>Director: </strong>${films.director}</li>
            <li><strong>Producer: </strong>${films.producer}</li>
            
            <li class="textBack"><strong>Description: </strong> ${films.description}</li>
          </ul>
        </figure>
        </div>
      </div>    
  </section>`).join(" ")

}

printMovies(data.films);

const select = document.querySelector("select");
select.addEventListener("change", ordenar);

function ordenar() {
  calculation.innerHTML = ""
  cardCharacters.innerHTML = ""
  var orderValues = select.value;
  let sortTitles = []
  if (orderValues === "az") {
    sortTitles = sortAZ(data.films);

  } else if (orderValues === "za") {
    sortTitles = sortZA(data.films);
  }
  printMovies(sortTitles);
}
//Função para printar personagens e função filtrar

function printCharacters(perso) {
  document.getElementById("cardCharacters").innerHTML = perso.map((data) => `
  <section class="container">
      <div class="cardCharacters-container">
      <div class="cardCharacters">
          <figure class="front">
            <img src="${data.img}" class"img"> 
            <div class="text">
            <h3 class="title">${data.name}</h3>
            </figure> 
          <figure class="back">
          <ul class="cardInfos">
          <div class="textBackCharacter">
            <li><strong>Movie: </strong>${data.movie}</li>
            <li><strong>Name: </strong> ${data.name}</li>
            <li><strong>Age: </strong>${data.age}</li>
            <li><strong>Eye color: </strong>${data.eye_color}</li>
            <li><strong>Hair color: </strong>${data.hair_color}</li>
            <li><strong>Gender: </strong>${data.gender}</li>
            <li><strong>Specie: </strong>${data.specie}</li>
            

          </ul>
        </figure>
        </div> </div>
      </div>    
  </section>`).join(" ")
}

function filterCharacter(f) {
  card.innerHTML = ""
  const calculos = document.getElementById("calculation")
  const value = f.target.value;
  if (value === "Male" || value === "Female") {
    const filter = filtrar(characters, "gender", value);
    printCharacters(filter);
    calculos.innerHTML = `A porcentagem de personagens é ${computeGender(filter, characters)} %`
  } else if (value === "Filters") {
    calculos.innerHTML = ""
    printCharacters(characters);
    calculos.innerHTML = `Todos os personagens`
  } else {
    calculos.innerHTML = ""
    const filter = filtrarAnimal(characters, "specie", "Human");
    printCharacters(filter);
    calculos.innerHTML = `A porcentagem de outros personagens é ${computeGender(filter, characters)} %`
  }
}
document.getElementById("genero").addEventListener("change", filterCharacter);


let search = document.getElementById("search");
search.addEventListener("keyup", function () {
  let movieSelected = filterMovies(data.films, search.value.toUpperCase())
  printMovies(movieSelected)
})


const btnMobile = document.getElementById("btn-mobile");
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active")
}
btnMobile.addEventListener('click', toggleMenu);
