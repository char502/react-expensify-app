import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

test("should render ExpenseListItem correctly", () => {
  // const reqProps = {expenses[1]};
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />); // this spreads out the object (picks the first expense item) then adds the properties (for the first expense item) to props for ExpenseListItem
  expect(wrapper).toMatchSnapshot();
});
