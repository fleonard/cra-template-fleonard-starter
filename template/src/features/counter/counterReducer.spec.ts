import reducer from "./counterReducer";
import actions from "./actions";
import { CounterActions } from "./types";

describe("counter Reducer", () => {

  it("should return the initial state", () => {
    expect(reducer(undefined, {} as CounterActions)).toEqual({
      value: 0
    });
  });

  it(`should increment the value`, () => {
    const initialState = {
      value: 0,
    };

    const expectedState = {
      value: 1,
    };

    expect(reducer(initialState, actions.incrementCounter())).toEqual(expectedState);
  });

  it(`should decrement the value`, () => {
    const initialState = {
      value: 1,
    };

    const expectedState = {
      value: 0,
    };

    expect(reducer(initialState, actions.decrementCounter())).toEqual(expectedState);
  });
});
