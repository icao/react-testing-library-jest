import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe("Pruebas en <FirstApp />", () => {
  test("Deberia hacer match con el snapshot", () => {
    render(<FirstApp title="Soy un titulo" />);
  });
});
