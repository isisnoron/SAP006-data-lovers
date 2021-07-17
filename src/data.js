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

export const computeGender = (gender) => {
  return Math.round((gender.length / people.length)* 100);
}