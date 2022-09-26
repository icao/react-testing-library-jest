import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync() debería regresar un heroe con el id 1", (done) => {
    const id = 1;
    const batman = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(batman); // [1]
      done();
    });
  });

  test("getHeroeByIdAsync() debería retornar un mensaje de error si no existe un heroe con el id mandado como parámetro.", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe con el id: ${id}`);
      done();
    });
  });
});

/**
 * [1] - El método done() nos ayuda a esperar la finalización de una petición asincrona.
 *
 * done() es pasada como un argumento, puede tener cualquier nombre, pero como convención es mejor nombrarlo como "done".
 *
 * done() lo mandamos a invocar despues de la llamada a la petición asincrona, para indicarle a JEST que debe esperar por la respuesta, y posterior a esto seguir avanzando.
 *
 * Si no lo especificamos, JEST nos arroja un error.
 *
 *  */
