import React from "react";
import { mount } from "enzyme";
import { Card } from ".";
import { ADDRESS, CEP, DISTRICT, STATE, TITLE, UF } from "../../variables";

import * as CardFunctions from "../../utils/searchAddress";
import { findByTestAttr } from "../../utils/findByTestAttr";

describe("Should test Card component", () => {
  const cardTitle = "card-title";
  const cardInput = "card-input";
  const cardButton = "card-button";

  const nameInputValue = "inputValue";

  describe("Test header", () => {
    test("Should contain a title", () => {
      let component = mount(<Card />);
      let wrapper = findByTestAttr(component, cardTitle);

      expect(wrapper.at(1).text()).not.toEqual("");
      expect(wrapper.at(1).text()).toEqual(TITLE);
    });

    test("Should check input empty", () => {
      let component = mount(<Card />);
      let wrapper = findByTestAttr(component, cardInput);

      expect(wrapper.at(1).text()).toEqual("");
    });
  });

  describe("Test input", () => {
    test("Should set input value 00000000", () => {
      const event = { target: { name: nameInputValue, value: "00000000" } };
      let component = mount(<Card />);
      let wrapper = findByTestAttr(component, cardInput);

      wrapper.at(1).simulate("change", event);
      wrapper = findByTestAttr(component, cardInput);

      expect(wrapper.at(1).prop("value")).toEqual("00000000");
    });

    test("Should set input value empty", () => {
      const event = { target: { name: nameInputValue, value: "" } };
      let component = mount(<Card />);
      let wrapper = findByTestAttr(component, cardInput);

      wrapper.at(1).simulate("change", event);
      wrapper = findByTestAttr(component, cardInput);

      expect(wrapper.at(1).prop("value")).toEqual("");
    });
  });

  describe("Test button", () => {
    test("Should call function on click button", () => {
      let searchAddressSpy = jest.spyOn(CardFunctions, "searchAddress");
      searchAddressSpy.mockImplementation(async () => {});

      let component = mount(<Card />);
      let wrapper = findByTestAttr(component, cardButton);

      wrapper.at(1).simulate("click");

      expect(searchAddressSpy).toHaveBeenCalled();
      searchAddressSpy.mockRestore();
    });
  });

  describe("Test labels", () => {
    test("Should have UF text", () => {
      const cardLabelUf = "card-label-uf";
      let component = mount(<Card />);
      let wrapper = findByTestAttr(component, cardLabelUf);

      expect(wrapper.at(1).text()).toEqual(`${UF}:`);
    });

    test("Should have CEP text", () => {
      const cardLabelCep = "card-label-cep";
      let component = mount(<Card />);
      let wrapper = findByTestAttr(component, cardLabelCep);

      expect(wrapper.at(1).text()).toEqual(`${CEP}:`);
    });

    test("Should have DISTRICT text", () => {
      const cardLabelDistrict = "card-label-district";
      let component = mount(<Card />);
      let wrapper = findByTestAttr(component, cardLabelDistrict);

      expect(wrapper.at(1).text()).toEqual(`${DISTRICT}:`);
    });

    test("Should have STATE text", () => {
      const cardLabelState = "card-label-state";
      let component = mount(<Card />);
      let wrapper = findByTestAttr(component, cardLabelState);

      expect(wrapper.at(1).text()).toEqual(`${STATE}:`);
    });

    test("Should have ADDRESS text", () => {
      const cardLabelAddress = "card-label-address";
      let component = mount(<Card />);
      let wrapper = findByTestAttr(component, cardLabelAddress);

      expect(wrapper.at(1).text()).toEqual(`${ADDRESS}:`);
    });
  });
});
