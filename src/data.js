export const orderGhibli = (data) => data.sort((a,z) => a.title > z.title ? 1 : -1);
export const sortAZ = (data) => orderGhibli(data).slice(0, 20); //Retorna uma parte de um array existente
export const sortZA = (data) => sortAZ(data).reverse();

//console.log("orderGhibli")

/*export const orderGhibli = (database, condition) => {
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
}/*




/*export const filterData = (database, type, condition) => {
  if (!condition) return database;
  const filterResult = database.filter((item) => item[type] === condition);
  return filterResult;
}; 
 console.log("filterData");   */


/*export const genero = (data, condition) => {
  const fem = data.results.filter(results => results.gender == condition)
  console.log(fem);
    return fem;
};*/

  //opção de filtrar por gênero
/*
respostaFem = []
for (item of genero) {
if (item === "Female")
respostaFem.push(item)
}

respostaMas = []
for (item of genero) {
  if (item === "Male")
  respostaMas.push(item)
}
console.log(respostaMas);
*/

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/



/*filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.
sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.
computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.  */