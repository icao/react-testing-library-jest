import {
  obtenerUsuario,
  obtenerUsuarioActivo,
} from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("obtenerUsuario debe retornar un objeto", () => {
    const objetoExperado = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const objeto = obtenerUsuario();

    // expect(objeto).toBe(objetoExperado); // [1]
    expect(objeto).toEqual(objetoExperado); // [2]
  });

  test("obtenerUsuarioActivo debe retornar un objeto con el nombre pasado como argumentro", () => {
    const nombre = "Pancho";
    const objetoExperado = {
      uid: "ABC567",
      username: nombre,
    };
    const objeto = obtenerUsuarioActivo(nombre);

    expect(objeto).toStrictEqual(objetoExperado);
  });
});


/**
 * [1] - Ocasionaria un error. el método toBe(), compara el objeto usuarioPrueba con el objeto que regresa la función.
 * toBe() hace referencia a el valor en memoria, y no en el valor de los parametros del objeto.
 *
 * Ejemplo: {} === {} // FALSE
 *
 * Para hacer una comparacion de los valores de un objeto, se necesita hacer uso del método toEqual()
 *
 */

/**
 * [2]
 * toEqual()
 *
 * toEqual(valor)
 *
 * Se utiliza  para comparar recursivamente todas las propiedades de las instancias de objeto(tambien conocidas como "igualdad profunda")
 * Llama a comparar valores primitivos, es incluso mejor para las pruebas que "==" el operador de igualdad estricta.
 *
 * NOTA: No usar con números de punto flotante, en su lugar usar toBeClosedTo()
 *
 */
