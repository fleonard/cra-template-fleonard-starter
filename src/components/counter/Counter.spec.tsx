import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
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
    const wrapper = mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const countValue = wrapper.find("strong").text();
    expect(countValue).toBe("42");
  });

  it("should be possible to increment counter.", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    wrapper
      .find("button")
      .filter({ "aria-label": "increment" })
      .simulate("click");

    expect(store.dispatch).toBeCalledTimes(1);

    expect(store.dispatch).toBeCalledWith(actions.incrementCounter());
  });

  it("should be possible to decrement counter.", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    wrapper
      .find("button")
      .filter({ "aria-label": "decrement" })
      .simulate("click");

    expect(store.dispatch).toHaveBeenCalledTimes(1);

    expect(store.dispatch).toHaveBeenCalledWith(actions.decrementCounter());
  });
});
