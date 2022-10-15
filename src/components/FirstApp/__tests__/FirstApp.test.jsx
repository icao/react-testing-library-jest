import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe("Pruebas en <FirstApp />", () => {
  const title = "Soy un titulo";

  test("Deberia hacer match con el snapshot", () => {
    // Haciendo el render del componente FirstApp
    render(<FirstApp title={title} />); // [1] método render()

    // Haciendo el render del componente FirstApp y extrayendo el container
    const { container } = render(<FirstApp title={title} />);
    // console.log(container);

    // Se espera que el container sea igual al snapshot que se tiene del componente FirstApp
    expect(container).toMatchSnapshot(); // [2] método toMatchSnapshot()
  });

  test("Debe mostrar el titulo en un h1", () => {});
});

/**
 * ------------------------------
 * [1]- render()
 * ------------------------------
 *
 * El método render() de React Testing Library, hace una representación del componente como si estuviera renderizandose en el navegador.
 *
 * render() nos regresa un objeto como una especie de DOM con nodos, entre los cuales nos retorna un elemento llamado "container"
 *
 *
 * ------------------------------
 * [2]- toMatchSnapshot()
 * ------------------------------
 *
 * El método toMatchSnapshot() compara si el snapshot es igual al elemento que estamos rendereando con las propiedades personalizadas en el test.
 *
 * Un snapshot es una especie de fotografia de como se encuentra actualmente el componente al momento de ser renderizado, esto se genera con RTL(React Testing Library), creando una carpeta __snapshot__ donde contiene el snapshot del componente.
 *
 * El snapshot nos sirve como punto de referencia para testear nuestro componente y puede ser actualizado si se modifica el layout del componente.
 * */
