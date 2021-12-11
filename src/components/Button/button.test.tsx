import React from "react";
import { mount } from "enzyme";
import { Button } from ".";

describe("Should test button", () => {
  test("Should contain a text", () => {
    let component = mount(<Button />);
    console.log(component.at(0).debug());
  });
  test("Should call a function", () => {});
});
