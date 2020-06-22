import styled from "styled-components/macro";
import { Button, Grid, Typography } from "@material-ui/core";

const ButtonWrapper = styled(Grid)`
  margin: 0 auto;
  padding-top: 40px;
`;

const CounterWrapper = styled(Grid)`
  margin: 0 auto;
  padding-top: 40px;
`;

const CounterTitle = styled(Typography)`
  && {
    font-size: 22px;
  }
`;

const CounterValue = styled(Typography)`
  && {
    font-size: 16px;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-right: 20px;
  }
`;

export { ButtonWrapper, CounterWrapper, CounterTitle, CounterValue, StyledButton };
