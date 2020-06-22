import React, { Fragment } from "react";
import { Container, Typography } from "@material-ui/core";

import Counter from "../../components/counter/Counter";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Container maxWidth="lg">
      <Typography variant="h1">Create React App powered by fleonard</Typography>
      <Counter />
      </Container>
    </Fragment>
  );
};

export  default Home;
