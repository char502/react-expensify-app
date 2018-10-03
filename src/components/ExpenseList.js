
// This file controls what is actuallt rendered to the screen

import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return (
                <ExpenseListItem key={expense.id} {...expense} /> // returning an instance of ExpenseListItem
                // key={expense.id} is required to access each index on the array via a unique value - in this case it is id
            )
        })}
    </div>
);

// when you connect a component to the redux store it's reactive (as the store changes your component is going to get re-rendered with those new values)
// This is good as it enables the developer to create very simple components - (i.e. the component does not have to worry about store.subscribe or store.getState, it doesn't have to use any component state to manage that data, instead all of this is done for you by React redux.)
// All the developer has to do is define how want to render things
// want to try and get as many components as possible into the presentational component pattern

const mapStateToProps = (state) => { // as the const implies this links the state to this components props - this defines the things want to get off of the store
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList); // defines the component want to get a connected version of. This allows the named component to access any data it needs from the store