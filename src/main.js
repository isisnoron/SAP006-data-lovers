import { orderGhibli, sortAZ, sortZA } from './data.js';

import data from './data/ghibli/ghibli.js';

console.log(orderGhibli)

//const animation = data.films
//console.log(orderGhibli, data);
//console.log(genero, data);


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
            <li><strong>Nome:</strong> ${films.title}</li>
            <li><strong>Diretor: </strong>${films.director}</li>
            <li class="textBack"><strong> Descrição:</strong> ${films.description}</li>
          </ul>
        </figure>
        </div>
      </div>    
  </section>`).join(" ")
};

printMovies(data.films)



var select = document.querySelector("select");
select.addEventListener("change", ordenar); 

function ordenar() {
  var orderValues = select.value;

  if (orderValues === "az") {
    const sortTitles = printMovies(sortAZ(data.films, orderValues));
    console.log()
    printMovies(sortTitles);

  } else if (orderValues === "za") {
    const sortTitles = printMovies(sortZA(data.films, orderValues));
    printMovies(sortTitles);
  }
}




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