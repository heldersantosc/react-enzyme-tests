import React, { useState } from "react";
import { StyledCard, StyledInput, StyledLabel, StyledTitle } from "./styles";
import { ADDRESS, CEP, DISTRICT, STATE, TITLE, UF } from "../../variables";

import { Button } from "../Button";

import { defaultAddress } from "../../utils/defaultAddress";
import { searchAddress } from "../../utils/searchAddress";

export const Card: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [address, setAddress] = useState(defaultAddress);

  return (
    <StyledCard.container>
      <StyledCard.header.content>
        <StyledTitle data-test="card-title">{TITLE}</StyledTitle>
      </StyledCard.header.content>

      <StyledCard.body.content>
        <StyledLabel htmlFor="inputValue" bold>
          Digite um CEP:
        </StyledLabel>
        <StyledInput
          id="inputValue"
          name="inputValue"
          type="text"
          autoFocus
          value={inputValue}
          data-test="card-input"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button
          data-test="card-button"
          onClick={() => searchAddress(inputValue, setAddress)}
          text="Buscar"
        />
      </StyledCard.body.content>

      <StyledCard.footer.content>
        <StyledCard.footer.group>
          <StyledLabel data-test="card-label-uf" bold>
            {UF}:
          </StyledLabel>
          {address.uf}
        </StyledCard.footer.group>

        <StyledCard.footer.group>
          <StyledLabel data-test="card-label-cep" bold>
            {CEP}:
          </StyledLabel>
          {address.cep}
        </StyledCard.footer.group>

        <StyledCard.footer.group>
          <StyledLabel data-test="card-label-district" bold>
            {DISTRICT}:
          </StyledLabel>
          {address.bairro}
        </StyledCard.footer.group>

        <StyledCard.footer.group>
          <StyledLabel data-test="card-label-state" bold>
            {STATE}:
          </StyledLabel>
          {address.localidade}
        </StyledCard.footer.group>

        <StyledCard.footer.group>
          <StyledLabel data-test="card-label-address" bold>
            {ADDRESS}:
          </StyledLabel>
          {address.logradouro}
        </StyledCard.footer.group>
      </StyledCard.footer.content>
    </StyledCard.container>
  );
};
