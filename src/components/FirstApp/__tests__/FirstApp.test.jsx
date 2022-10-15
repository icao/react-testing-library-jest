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

  test("Debe mostrar el titulo en un h1", () => {
    const { container, getByText } = render(<FirstApp title={title} />);

    // Se espera que el titulo extraido exista.
    // Con esta evaluación, no se toma a consideración su posicion o si es un elemento H1
    expect(getByText(title)).toBeTruthy(); // [3] método toBeTruthy

    // Usando JS para acceder al valor dentro de container
    const h1 = container.querySelector("h1");

    // Se espera que el h1 contenga el titulo
    expect(h1.innerHTML).toContain(title); // [4] método toContain
    // Notese que esta pasando la prueba anterior y la siguiente, ignorando los espacios.
    expect(h1.innerHTML).toContain(` ${title} `);
  });
});

/**
 * ------------------------------;
 *
 * consosol
 * expect(h1.innerHTML)
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
 * 
 * 
 * ------------------------------
 * [3]- getByText() - toBeTruthy()
 * ------------------------------
 * getByText: Encuentra el texto que es pasado como parametro(string)
 * 
 * toBeTruthy: Solo evalua si el valor es verdadero/truthy
 * 
 * Estas evaluaciones en el test, no seria muy acertivo, ya que solo evalua si el texto plano existe o coincide.
 * 
 * ------------------------------
 * [4]- toContain
 * ------------------------------
 * toContain: Evalua si el contenido es igual al esperado.
 * No evalua como tal el elemento, si no que lo contenga.
 * 
 * En el ejemplo anterior se evalua si el elemento pasado como h1(previamente extraido), contiene el mismo texto que se espera(const title = "Soy un titulo")
 * 
 * Hay que tener cuidado al usar toContain() porque hace una evaluación sobre el contenido en especifico.
 * En nuestro snapshot tenemos que [<h1 className="title"> {title} </h1>] contiene espacios entre el texto.
 * 
 * Nuestra prueba pasa, ignorando los espacios, es por eso que debemos de tener cuidado al usar este método. Porque si afecta al diseño de nuestra interfaz, estaremos omitiendo ciegamente el verdadero contenido que deberiua ser.
 * 
 * En el siguiente test, despues de este, usaremos algo mas especifico. Vease acontinuación.
 * 
 * */
