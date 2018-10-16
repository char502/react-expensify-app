import React from "react";
import { shallow } from "enzyme";
// import toJSON from "enzyme-to-json";
// import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";

// react-test-renderer

// shallow rendering - only renders the given component
// fill DOM rendering - renders child components etc so would fail on tests if all parts not included

// snapshots - allows tracking of changes to data over time

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
