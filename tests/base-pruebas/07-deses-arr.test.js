import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("retornaArreglo() deberia retornar un elemento tipo string, un tipo numero y un booleano", () => {
    const [
      elementoString, elementoNumero, elementoBooleano
    ] = retornaArreglo();

    expect(typeof elementoString).toBe("string");
    expect(typeof elementoNumero).toBe("number");
    expect(typeof elementoBooleano).toBe("boolean");
  });
});
