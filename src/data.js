import data from "./data/ghibli/ghibli.js";
const orderGhibli = (data) => data.sort((a, z) => a.title > z.title ? 1 : -1);
export const sortAZ = (data) => orderGhibli(data).slice(0, 20); //Retorna uma parte de um array existente
export const sortZA = (data) => sortAZ(data).reverse();

export const films = data.films;
export const people = films.reduce((total, film) => total.concat(film.people), []);

export const filtrar = (arr, key, value) =>
  arr.filter((item) => item[key] === value);

export const filtrarAnimal = (arr, key, value) =>
  arr.filter((item) => item[key] !== value);



/*export const orderGhibli = (database, condition) => {    //primeira tentativa ordenar
  if (!condition) return database;

  if (condition === "az" || condition === "za") {
    const orderAZ = database.sort(function (a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });

    if (condition === "az") return orderAZ;

    return orderAZ.reverse();
  }
}*/
