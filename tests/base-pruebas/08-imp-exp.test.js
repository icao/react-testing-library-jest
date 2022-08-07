import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por ID", () => {
    const batman = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };

    const id = 1;
    const heroe = getHeroeById(id);
    // console.log(heroe);
    expect(heroe).toEqual(batman);
  });

  test("getHeroeById debe retornar undefinded si no existe el heroe", () => {
    const id = 500;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined); //[1]
    expect(heroe).toBeFalsy(); //[2]
  });

  // [1] - Esto puede ser valido, pero tambien podemos tener otro metodo mas descriptivo. undefinded es un tipo de dato primitivo, por consiguiente con el método .toBe()

  // [2] - Nos indica que regresa un valor falsy. Pero hay que tener cuidado porque si esta retornando un booleano falso, se cumplira, y en nuestro caso debemos retornar undefined.

  test("getHeroesByOwner debe de retornar un arreglo con los heroes de DC", () => {
    // length === 3
    // length usar toEqual

    const heroesDC = [
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ];

    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    // console.log(heroes);
    // console.log(heroesDC);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(heroesDC);
  });

  test("getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel", () => {
    // length === 2

    const heroesMarvel = [
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ];

    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    // console.log(heroes);
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroesMarvel);
  });
});
