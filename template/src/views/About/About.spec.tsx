import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";

import About from "./About";

describe("About Component", () => {
  it("renders correctly", () => {
    const { container } = render(<About />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
