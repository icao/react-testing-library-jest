import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await.js", () => {
  test("getImagen() debería regresar una URL de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    console.log(typeof url);

    expect(typeof url).toBe("string");
  });

  //! Para que esta prueba se ejecute como debe, debemos borrar o cambiar el apiKey por uno invalido, en el archivo 11-async-await.js
  // test("getImagen() debería regresar un error si no es valido el apiKey", async () => {
  //   const response = await getImagen();
  //   console.log(response);

  //   expect(response).toBe("No se encontro la imagen");
  // });
});

/**
 * La otra alternativa para poder testear código asincrono, es usando async/await como siempre lo venimos usando en nuestro JS.
 *
 * Test ahora recibe un callback asyncrono, para que podamos esperar la respuesta de nuestra solicitud asincrona de getImage, con el uso del await.
 *
 * Como se muestra en el ejemplo, sería sin usar ningun callback adicional como "done()" para testear nuestro código asincrono.
 *
 *
 *
 * */
