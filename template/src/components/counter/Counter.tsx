import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "../../features/counter";

import {
  ButtonWrapper,
  CounterWrapper,
  CounterTitle,
  CounterValue,
  StyledButton,
} from "./StyledCounter";

const Counter: React.FC = () => {
  const count = useSelector(selectors.getCountValue);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <CounterWrapper
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <CounterTitle variant="h2" className="card-title">
          Counter component
        </CounterTitle>
        <CounterValue variant="h4">
          Counter: <strong data-testid="counter">{count}</strong>
        </CounterValue>
        <ButtonWrapper
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <StyledButton
            variant="contained"
            color="primary"
            type="button"
            aria-label="decrement"
            data-testid="decrement"
            onClick={() => dispatch(actions.decrementCounter())}
          >
            {" "}
            -{" "}
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            type="button"
            aria-label="increment"
            data-testid="increment"
            onClick={() => dispatch(actions.incrementCounter())}
          >
            {" "}
            +{" "}
          </StyledButton>
        </ButtonWrapper>
      </CounterWrapper>
    </Fragment>
  );
};

export default Counter;
