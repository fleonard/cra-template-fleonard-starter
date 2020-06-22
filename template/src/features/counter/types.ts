export enum CounterActionTypes {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

interface CounterBaseAction {
  type: CounterActionTypes;
}

export interface IncrementCounter extends CounterBaseAction {
  type: CounterActionTypes.INCREMENT_COUNTER;
}

export interface DecrementCounter extends CounterBaseAction {
  type: CounterActionTypes.DECREMENT_COUNTER;
}

export type CounterActions =
  | IncrementCounter
  | DecrementCounter;

export interface SystemState {
  count: {
    value: number
  }
}
