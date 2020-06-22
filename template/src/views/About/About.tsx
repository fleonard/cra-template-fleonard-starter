import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

const About: React.FC = () => {
  const history = useHistory();

  return (
    <Fragment>
      <Typography variant="h1">About</Typography>
      <Button
        variant="contained"
        color="primary"
        type="button"
        className="btn"
        cy-data="go-back-button"
        onClick={() => history.push("/")}
      >
        Go back
      </Button>
    </Fragment>
  );
};

export default About;
