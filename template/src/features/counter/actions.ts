import { CounterActionTypes, CounterActions } from "./types";

const incrementCounter = (): CounterActions => {
  return {
    type: CounterActionTypes.INCREMENT_COUNTER
  };
};

const decrementCounter = (): CounterActions => {
  return {
    type: CounterActionTypes.DECREMENT_COUNTER
  };
};

export default {
  incrementCounter,
  decrementCounter
};
