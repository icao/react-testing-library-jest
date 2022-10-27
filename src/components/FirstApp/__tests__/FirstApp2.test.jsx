import { render, screen } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe("Pruebas en <FirstApp />", () => {
  const title = "Hola soy un titulo principal";
  const subtitle = "Hola soy un subtitulo secundario";

  test("Debe haces match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el titulo", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy(); // [1] screen
    // screen.debug();
  });

  test("Debe mostrar el titulo en un H1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    ); // [2] getByRole()
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(3);
  });
});

/**
 * ------------------------------
 * [1]- screen
 * ------------------------------
 * screen es un objeto preligado al container que a su vez es retornado por el método render()
 *
 * Es asi como podemos hacer nuestas pruebas solo accediendo a l objeto screen sin depender de la declaración de un container.
 *
 * screen.deebug(): Donde debug() es un método que nos permite mostrar en ese momento de quiebre lo que tiene el snapshot rendereado.
 *
 * ------------------------------
 * [2]- getByRole()
 * ------------------------------
 * getByRole es otro método que nos provee React Testing Library para poder acceder a un elemento detro del DOM(el container o screen del snapshot).
 *
 * Podemos acceder a cualquier elemento especificando como primer parametro el tipo de elemento:
 *
 * getByRole([string_element])
 *
 * [string_element]: Elemento a buscar como un 'heading', 'button', etc.
 *
 * En casos como los headings debemos pasar como segundo parámetro, el nivel en especifico. Ejemplo: getByRole('heading', {level: 1})
 *
 * Lo que nos retornará el elemento en forma de objeto.
 *
 * */
