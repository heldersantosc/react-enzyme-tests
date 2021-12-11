import React, { Fragment } from "react";
import { Container } from "./components/Container";
import { Card } from "./components/Card";

export const App: React.FC = () => {
  return (
    <Fragment>
      <Container>
        <Card />
      </Container>
    </Fragment>
  );
};
