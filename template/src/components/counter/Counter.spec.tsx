import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render } from "@testing-library/react";
import configureStore from "redux-mock-store";

import { actions } from "../../features/counter";

import Counter from "./Counter";

describe("Counter", () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    count: {
      value: 42,
    },
  });

  jest.spyOn(store, "dispatch");

  beforeEach(() => {
    (store.dispatch as jest.Mock).mockClear();
  });

  it("renders correctly.", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const countValue = getByTestId("counter");
    expect(countValue.innerHTML).toBe("42");
  });

  it("should be possible to increment counter.", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent(
      getByTestId("increment"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(store.dispatch).toBeCalledTimes(1);

    expect(store.dispatch).toBeCalledWith(actions.incrementCounter());
  });

  it("should be possible to decrement counter.", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent(
      getByTestId("decrement"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(store.dispatch).toHaveBeenCalledTimes(1);

    expect(store.dispatch).toHaveBeenCalledWith(actions.decrementCounter());
  });
});
