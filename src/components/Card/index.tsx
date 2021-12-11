import React, { useState } from "react";
import {
  StyledButton,
  StyledCard,
  StyledInput,
  StyledLabel,
  StyledTitle,
} from "./styles";

import { api } from "../../services";
import { defaultAddress } from "../../utils/defaultAddress";

export const Card: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [address, setAddress] = useState(defaultAddress);

  function searchAddress() {
    api
      .getAddress(inputValue)
      .then((response) => response.json())
      .then((data) => setAddress(data))
      .catch((_) => setAddress(defaultAddress));
  }

  return (
    <StyledCard.container>
      <StyledCard.header.content>
        <StyledTitle>Busca por CEP</StyledTitle>
      </StyledCard.header.content>

      <StyledCard.body.content>
        <StyledLabel htmlFor="inputValue" bold>
          Digite um CEP:
        </StyledLabel>
        <StyledInput
          id="inputValue"
          type="text"
          autoFocus
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <StyledButton onClick={() => searchAddress()}>Buscar</StyledButton>
      </StyledCard.body.content>

      <StyledCard.footer.content>
        <StyledCard.footer.group>
          <StyledLabel bold>UF: </StyledLabel>
          {address.uf}
        </StyledCard.footer.group>

        <StyledCard.footer.group>
          <StyledLabel bold>CEP: </StyledLabel> {address.cep}
        </StyledCard.footer.group>

        <StyledCard.footer.group>
          <StyledLabel bold>Bairro: </StyledLabel>
          {address.logradouro}
        </StyledCard.footer.group>

        <StyledCard.footer.group>
          <StyledLabel bold>Bairro: </StyledLabel>
          {address.bairro}
        </StyledCard.footer.group>

        <StyledCard.footer.group>
          <StyledLabel bold>Estado: </StyledLabel>
          {address.localidade}
        </StyledCard.footer.group>
      </StyledCard.footer.content>
    </StyledCard.container>
  );
};
