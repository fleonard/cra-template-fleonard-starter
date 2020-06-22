import { CounterActionTypes, CounterActions } from "./types";

const initialState = {
  value: 0,
};

export default (state = initialState, action: CounterActions) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 };
    case CounterActionTypes.DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};
