test("Deberia ejecutarse con exito", function () {
  //Inicializacion
  // const mensaje1 = "Hola Mundo!!!   "; // valor con espacion causaria error
  const mensajePosible = "Hola Mundo!!!";
  //Estimulo
  const mensaje = mensajePosible.trim();
  //Observacion
  expect(mensajePosible).toBe(mensaje);
  // Se espera que el mensaje1(que pasamos), sea igual al valor que se espera que sea.
});

test("Deberia ser el mismo numeros", () => {
  const numeroTest = 12345; // Lo que vamos a testear
  const numero = 12345; // lo que se debe mostrar

  //Se espera que el numero a testear sea el valor esperado
  expect(numeroTest).toBe(numero);
});

/**
 * test()
 *
 * test('DESCRIPCION_DEL_TEST', function() { // código del test})
 *
 * Es el método principal que nos permitira hacer las pruebas de nuestro código.
 * Recibe un argumento que será un texto para describir que se va a probar, y una función(anónima) donde se hará el test.
 *
 */

/**
 * expect()
 *
 * La funcion se utiliza cada vez que se deasea probar un valor, recibe un parametro que es el VALOR A TESTEAR
 *
 * expect(VALOR_A_EVALUAR).toBe(VALOR_ESPERADO)
 *
 * Donde:
 * VALOR_A_EVALUAR  -> Valor que se desea evaluar en el test(el que se ingresa)
 * VALOR_ESPERADO -> Valor que se espera que sea el valor evaluado en expect
 */

/**
 * toBe()
 *
 * Se usa para COMPARAR VALORES PRIMITIVOS o para comparar la IDENTIDAD REFERENCIAL DE LAS INSTANCIAS DE OBJETOS(Solo los valores de los parametros y la referencia del objeto).
 * Como hace solo la comparacion por referencia, no se debe aplicar en test donde querramos comparar el valor de 2 objetos.
 */
