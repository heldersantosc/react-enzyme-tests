import React from "react";
import { mount } from "enzyme";
import { Button } from ".";
import { findByTestAttr } from "../../utils/findByTestAttr";

describe("Should test button", () => {
  const mockFunction = jest.fn();
  const customButton = "custom-button";

  test("Should contain a text", () => {
    let component = mount(
      <Button data-test={customButton} onClick={mockFunction} text="Buscar" />
    );
    let wrapper = findByTestAttr(component, customButton);

    expect(wrapper.at(0).text()).toEqual("Buscar");
  });

  test("Should not contain a text", () => {
    let component = mount(
      <Button data-test={customButton} onClick={mockFunction} text="" />
    );
    let wrapper = findByTestAttr(component, customButton);

    expect(wrapper.at(1).text()).toEqual("");
  });

  test("Should call a function when button click", () => {
    let component = mount(
      <Button data-test={customButton} onClick={mockFunction} text="" />
    );
    let wrapper = findByTestAttr(component, customButton);

    wrapper.at(1).simulate("click");

    expect(mockFunction).toHaveBeenCalled();
  });
});
