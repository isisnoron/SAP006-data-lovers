import { sortAZ, sortZA, filtrar, filtrarAnimal, computeGender, filterMovies } from '../src/data.js';


const films = [
  { "title": "My Neighbor Totoro" },
  { "title": "Castle in the Sky" },
  { "title": "Porco Rosso" },
  { "title": "Spirited Away" }
];

const characters = [
  { "name": "Satsuki Kusakabe", "gender": "Female", "specie": "Human" },
  { "name": "Tatsuo Kusakabe", "gender": "Male", "specie": "Human" },
  { "name": "Totoro", "gender": "Male", "specie": "Totoro" },
  { "name": "Pazu", "gender": "Male", "specie": "Human" },
  { "name": "Lusheeta Toel Ul Laputa", "gender": "Female", "specie": "Human" },
  { "name": "Dola", "gender": "Female", "specie": "Human" },
  { "name": "Nigihayami Kohakunushi/Haku", "gender": "Male", "specie": "Deity, Dragon" },
  { "name": "Yubaba", "gender": "Female", "specie": "Witch" },
];

const gender = [
  { "name": "Pazu", "gender": "Male"},
  { "name": "Dola", "gender": "Female"},
  { "name": "Tatsuo Kusakabe", "gender": "Male"},
  {"name": "Satsuki Kusakabe", "gender": "Female"}
];

describe('sortAZ', () => {
  it('is a function', () => {
    expect(typeof sortAZ).toBe('function');
  });

  it('deverá retornar animações em ordem alfabética de A-Z', () => {
    expect(sortAZ(films)).toEqual([{ "title": "Castle in the Sky" }, { "title": "My Neighbor Totoro" }, { "title": "Porco Rosso" }, { "title": "Spirited Away" }]);
  });

});


describe('sortZA', () => {
  it('is a function', () => {
    expect(typeof sortZA).toBe('function');
  });

  it('deverá retornar animações em ordem alfabética de Z-A', () => {
    expect(sortZA(films)).toEqual([{ "title": "Spirited Away" }, { "title": "Porco Rosso" }, { "title": "My Neighbor Totoro" }, { "title": "Castle in the Sky" }]);
  });
});


describe('filtrar', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('deve retornar personagens do gênero "Female"', () => {
    expect(filtrar(characters, "gender", "Female")).toEqual([
      { "name": "Satsuki Kusakabe", "gender": "Female", "specie": "Human" },
      { "name": "Lusheeta Toel Ul Laputa", "gender": "Female", "specie": "Human" },
      { "name": "Dola", "gender": "Female", "specie": "Human" },
      { "name": "Yubaba", "gender": "Female", "specie": "Witch" }]);

  })

  it('deve retornar personagens do gênero "Male"', () => {
    expect(filtrar(characters, "gender", "Male")).toEqual([
      { "name": "Tatsuo Kusakabe", "gender": "Male", "specie": "Human" },
      { "name": "Totoro", "gender": "Male", "specie": "Totoro" },
      { "name": "Pazu", "gender": "Male", "specie": "Human" },
      { "name": "Nigihayami Kohakunushi/Haku", "gender": "Male", "specie": "Deity, Dragon" },
    ]);

  });
});

describe('filtrarAnimal', () => {
  it('is a function', () => {
    expect(typeof filtrarAnimal).toBe('function');
  });

  it('deve retornar personagens da espécie diferente de "Human"', () => {
    expect(filtrarAnimal(characters, "specie", "Human")).toStrictEqual([
      { "name": "Totoro", "gender": "Male", "specie": "Totoro" },
      { "name": "Nigihayami Kohakunushi/Haku", "gender": "Male", "specie": "Deity, Dragon" },
      { "name": "Yubaba", "gender": "Female", "specie": "Witch" }]);
  })
});


describe('computeGender', () => {
  it('its a function', () => {
    expect(typeof computeGender).toBe('function');
  });
  it('retornar porcentagem', () => {
    expect(computeGender(gender, 'Female')).toBe(67);
  });
})


describe('filterMovies()', () => {

  it('should be a function', () => {
    expect(typeof filterMovies).toBe('function')
  });

  it('should return movie by search', () => {
    expect(filterMovies(films, "Castle in the Sky")).toEqual([{ "title": "Castle in the Sky" }]);
  });

})