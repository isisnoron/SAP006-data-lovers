import { sortAZ, sortZA, people, filtrar, filtrarDiferente } from './data.js';
import data from './data/ghibli/ghibli.js';

const cardCharacters = document.getElementById("cardCharacters")
const card = document.getElementById("card")

function printMovies(data) {
  document.getElementById('card').innerHTML = data.map((films) => `
  <section class="container">
      <div class="card-container">
      <div class="card">
          <figure class="front">
            <img src="${films.poster}" class"img"> 
            <div class="text">
            <h3 class="title">${films.title}</h3>
            <h4 class="ano">${films.release_date} </h4>
          </figure> 
        <figure class="back">
          <ul class="cardInfos">
            <li><strong>Title:</strong> ${films.title}</li>
            <li><strong>Director: </strong>${films.director}</li>
            <li class="textBack"><strong>Description: </strong> ${films.description}</li>
          </ul>
        </figure>
        </div>
      </div>    
  </section>`).join(" ")
};

printMovies(data.films);

const select = document.querySelector("select");
select.addEventListener("change", ordenar);

function ordenar() {
  cardCharacters.innerHTML = ""
  const orderValues = select.value;

  if (orderValues === "az") {
    const sortTitles = printMovies(sortAZ(data.films, orderValues));
    printMovies(sortTitles);

  } else if (orderValues === "za") {
    const sortTitles = printMovies(sortZA(data.films, orderValues));
    printMovies(sortTitles);
  }
}

//const personagens = data.films.map(filmes => filmes.people); //usei map para pegar todos os títulos
//console.log(personagens)

//Função para printar personagens e função filtrar

function printCharacters(perso) {
  document.getElementById('cardCharacters').innerHTML = perso.map((data) => `
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
  const value = f.target.value;
  if (value === "Male" || value === "Female") {
    printCharacters(filtrar(people, "gender", value));
  } else if (value === "Filters") {
    printCharacters(people);
  } else {
    printCharacters(filtrarDiferente(people, "specie", "Human"));
  }
}

document.getElementById("genero").addEventListener("change", filterCharacter);





//const search = document.getElementById("search");

//const animations = data.films.map(filmes => filmes.title); //usei map para pegar todos os títulos
//console.log(animations)


/*function ordenarAZ() {    //primeira tentativa de ordenar
  const filtroOrdenar = document.getElementById("order").value
  const ordenar = orderGhibli(data, animations)
  console.log(filtroOrdenar)
  document.getElementById("ordenar").addEventListener("change", ordenarAZ)
  return ordenarAZ
}*/

