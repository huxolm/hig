import { shallow } from "enzyme";
import React from "react";
import { ExternalLinkUI } from "@hig/icons";

import ExternalLinkIcon from "./ExternalLinkIcon";

describe("side-nav/presenters/ExternalLinkIcon", () => {
  it("default", () => {
    const wrapper = shallow(<ExternalLinkIcon />);
    expect(wrapper.type()).toEqual(ExternalLinkUI);
  });
});
