import React from "react";
import { mount } from "enzyme";
import { Container } from ".";
import { findByTestAttr } from "../../utils/findByTestAttr";

describe("Should test Container", () => {
  const customContainer = "custom-container";

  test("Should contain a child", () => {
    let component = mount(
      <Container>
        <div></div>
      </Container>
    );
    let wrapper = findByTestAttr(component, customContainer);

    expect(wrapper.at(1).containsMatchingElement(<div></div>)).toEqual(true);
  });

  test("Should not contain a child", () => {
    let component = mount(<Container />);
    let wrapper = findByTestAttr(component, customContainer);

    expect(wrapper.at(1).containsMatchingElement(<></>)).toEqual(false);
  });
});
