import React from "react";
import { StyledButton } from "./styles";

export interface IButtonProps {
  text: string;
  "data-test": string;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = (props) => {
  return (
    <StyledButton data-test={props["data-test"]} onClick={props.onClick}>
      {props.text}
    </StyledButton>
  );
};
