import { obtenerSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test('obtenerSaludo debe mostrar "Hola Cesar"', () => {
    const nombre = "Cesar";
    const mensaje = obtenerSaludo(nombre);

    expect(mensaje).toBe(`Hola ${nombre}`); //Hola Cesar === Hola Cesar
    // expect(mensaje).toBe(`Hola ${nombre}!!!`); //Hola Cesar != Hola Cesar!!!
  });
});
