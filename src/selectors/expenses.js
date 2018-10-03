
import moment from 'moment';

// get vsible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
        // if all of these are true the filter function will return true and the item will be kept in the array
        // if any are false, the whole thing will result in false (because using 'and' resulting in the item being removed from the array) 
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; // (THE MOST RECENT EXPENSES AT THE TOP. 1 is returned if b comes first i.e. b was created earlier than a. If -1, a comes first as a was created earlier than b)
            // so presumably then if switch round 1 and -1 the oldest would come first?
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};