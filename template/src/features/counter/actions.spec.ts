import { CounterActionTypes } from "./types";

import actions from "./actions";

describe("counter actions", () => {
  it("should create an action to increment the counter", () => {
    const expectedAction = {
      type: CounterActionTypes.INCREMENT_COUNTER
    };
    expect(actions.incrementCounter()).toEqual(expectedAction);
  });

  it("should create an action to decrement the counter", () => {
    const expectedAction = {
      type: CounterActionTypes.DECREMENT_COUNTER
    };
    expect(actions.decrementCounter()).toEqual(expectedAction);
  });
});
