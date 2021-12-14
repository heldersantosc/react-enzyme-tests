import { ReactWrapper } from "enzyme";

export const findByTestAttr = function (
  component: ReactWrapper,
  attr: string
): ReactWrapper {
  return (
    component.find(`[data-test='${attr}']`) || component.find(`#${attr}']`)
  );
};
