import { orderGhibli, sortAZ, sortZA } from './data.js';

import data from './data/ghibli/ghibli.js';

console.log(orderGhibli)

//const animation = data.films
//console.log(orderGhibli, data);
//console.log(genero, data);


function printMovies(data) {
  document.getElementById('card').innerHTML = data.map((film) => `
  <div class="card">
      <div class="front">
      <div class="image" style="background-image: url(${film.poster})"></div>
      <div class="text">
      <h3 class="title">${film.title}</h3>
      <h4 class="ano">${film.release_date} </h4>
     </div> 
    <div class="back">
      <ul class="cardInfos">
        <li><strong>Nome:</strong> ${film.title}</li>
        <li><strong>Diretor: </strong>${film.director}</li>
        <li><strong> Descrição:</strong> ${film.description}</li>
      </ul>
  </div>`)
};

printMovies(data.films)



function ordenarAZ() {
  const ordered = printMovies(sortAZ(data.films))
  return ordered
}
const selectOrdenar = document.getElementById("order");
selectOrdenar.addEventListener("change", ordenarAZ);

function ordenarZA() {
  const ordered2 = printMovies(sortZA(data.films))
  return ordered2

}
const selectOrdenar2 = document.getElementById("za");
selectOrdenar2.addEventListener("change", ordenarZA); 



/*
const animations = data.films
const selectOrdenar = document.getElementById("order");

function filterOrdenar(){
    const valueSelected = selectOrdenar.value
    const selectedMovies = orderGhibli(animations,valueSelected);
    printMovies(selectedMovies);
}


selectOrdenar.addEventListener("change", filterOrdenar); */


//const statisticInfo = document.getElementById("results");


//declarei e atribui valor as variáveis 
//const az = document.getElementById("az");
/*const za = document.getElementById("za");
const search = document.getElementById("search");
const feminino = document.getElementById("feminino");
const masculino = document.getElementById("masculino");*/


/*az.onchange = function (evento) {
  printMovies(data.films)
  let crescente = sortAZ(data.title);
  printMovies = (crescente);

  evento.preventDefault();
}; */


/*const animations = data.films.map(filmes => filmes.title); //usei map para pegar todos os títulos
console.log(animations)*/


/*const respostaFem = data.films.filter(item => item.people)   //função que cria um novo array recebendo os item generos
console.log(respostaFem)


function ordenarAZ() {
  const filtroOrdenar = document.getElementById("order").value
  const ordenar = orderGhibli(data, animations)
  console.log(filtroOrdenar)
  document.getElementById("ordenar").addEventListener("change", ordenarAZ)
  return ordenarAZ
}

*/

/*window.onload = createCards(characters);

document.getElementById("cards").innerHTML = printCards;

createCards(data.title);
console.log("createCards")*/

/*const ordenarAZ = (evento) => {

    evento.preventDefault(); 
    //chamando a função de ordenar AZ
};*/

//filterData(data, gender)