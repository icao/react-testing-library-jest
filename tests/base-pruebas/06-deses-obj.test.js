import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj.js", () => {
  test("Deberia de retornar un objeto destructurado", () => {
    const datos = {
      nombre: "Tony",
      edad: 45,
      clave: "Ironman",
    };

    const personaEsperada = { // Caso ideal
      nombreClave: "Ironman",
      anios: 45,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const persona = usContext(datos);
    
    // Se espera que el objeto regresadop sea igual al caso ideal
    expect(persona).toStrictEqual(personaEsperada);
  });
});
