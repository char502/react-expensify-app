import React from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


// use local component state to track the changes to all the below inputs (description, amount, note)
// only when the user actually submits the form will we do something with that information
// so, going to keep track of the changes to exery single input, only when the user actually submits the form will something be done with that information
// so will keep track of the changes to every single input, when they submit the form we'll actually send it off to redux to either edit the existing expense or create the new one


// const date = new Date(); // native js date api - not easy to work with
// const now = moment(); // moment library more straightforward
// console.log(now.format('MMM Do, YYYY'));

// React dates is calendar picker tool that requires moment to work 


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description })); // sets the description state equal to the value of the note variable. This is shorthand for description: description (when it is the same you don't have to put it twice)
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note })); // sets the note state equal to the value of the note variable
        // This is shorthand for note: note (when it is the same you don't have to put it twice)
    }
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // console.log('need details')
            this.setState(() => ({ error: 'Please provide description and amount' }));
        } else {
            // clear error state here
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({ // calling the object with all of the required properties
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <p>
                        <input
                            type="text"
                            placeholder="Description"
                            autoFocus
                            value={this.state.description}
                            onChange={(this.onDescriptionChange)} // otherwise will end up with a read-only input
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </p>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <p>
                        <textarea
                            type="text"
                            placeholder="Add a note for your expense (optional)"
                            value={this.state.note}
                            onChange={(this.onNoteChange)}
                        >
                        </textarea>
                    </p>
                    <p>
                        <button onClick={this.onSubmit}>Add Expense</button>
                    </p>
                </form>
            </div>
        )
    }
};

{/* <button onClick={() => {
    dispatch(removeExpense({ id }));
}}>Remove</button> */}