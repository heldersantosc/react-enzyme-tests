import React from "react";
import { StyledContainer } from "./styles";

export const Container: React.FC = (props) => {
  return (
    <StyledContainer data-test="custom-container">
      {props.children}
    </StyledContainer>
  );
};
