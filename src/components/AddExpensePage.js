import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = props => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        console.log(expense); // calling a prop - pulling the data through?
        props.dispatch(addExpense(expense));
        props.history.push("/"); // available as rendering component within react router
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
