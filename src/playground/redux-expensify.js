import { createStore, combineReducers } from 'redux';

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 95, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: 10000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('co'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1325));
// store.dispatch(setEndDate());

const demoState = {
  expenses: [{
    id: 'dasdasdsad',
    description: 'Rent',
    note: 'The final payment for that adress',
    amount: 55000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};