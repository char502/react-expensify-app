// install -> import -> use

import React from "react";
// import 'react-dates/initialize'; // this might be required
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses"; // needs to have curly braces to explicitly call the right action (without curly braces it will call the default action and there isn't one)
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

// import "./playground/promises";

const store = configureStore();

// store.subscribe(() => { // gets called every time the store changes
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     // console.log(visibleExpenses);
// });

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

console.log(store.getState());

ReactDOM.render(jsx, document.getElementById("app"));

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi. My name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// // -------------------------

// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}.`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());

// ===========================================
// For testing/examples
// ===========================================

// install -> import -> use

// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

// isEmail(str[, options])

//   =======================================
// The Below for testing/training purposes
// =========================================

// import './utils.js';
// import subtract, { square, add } from './utils.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 20))

// import isSenior, { isAdult, canDrink } from './person.js';
// console.log(isAdult(25));
// console.log(canDrink(25));
// console.log(isSenior(64));
