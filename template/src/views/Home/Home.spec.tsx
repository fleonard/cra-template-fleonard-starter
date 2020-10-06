import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import "jest-styled-components";

import configureStore from "redux-mock-store";

import Home from "./Home";

describe("About Component", () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    count: {
      value: 42,
    },
  });

  it("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
