import heroes from "../data/heroes.js";

// Devuelve un heroe que coincida con el id
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// Devuelve un heroe que coincida con el owner: MARVEL o DC
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
