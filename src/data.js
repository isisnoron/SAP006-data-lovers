const orderGhibli = (data) => data.sort((a, z) => a.title > z.title ? 1 : -1);
export const sortAZ = (data) => orderGhibli(data); //Retorna uma parte de um array existente
export const sortZA = (data) => sortAZ(data).reverse();

export const people = (films) => films.reduce((total, film) => {
  const characters = film.people.map((char) => {
    char.movie = film.title
    return char
  })
  return total.concat(characters)
}, []);


export const filtrar = (arr, key, value) =>
  arr.filter((item) => item[key] === value);

export const filtrarAnimal = (arr, key, value) =>
  arr.filter((item) => item[key] !== value);

export const computeGender = (gender, people) => {
  return Math.round((gender.length / people.length) * 100);
}


export const filterMovies = (data, search) => data.filter(item => item.title.toUpperCase().includes(search.toUpperCase()))

/*export const filterMovies = function (data, search) {
  const filteredMovies = data.filter(function (films) {
      return films.title.toUpperCase().includes(search)
    });
  return filteredMovies;
}*/

