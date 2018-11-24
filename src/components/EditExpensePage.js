import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="container">
        <div className="button-flex">
          <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
              props.dispatch(startEditExpense(props.expense.id, expense));
              props.history.push('/');
            }}
          />
          <button
            className="button button--secondary"
            onClick={() => {
              props.dispatch(startRemoveExpense({ id: props.expense.id }));
              props.history.push('/');
            }}
          >
            Remove Expense
      </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
}

export default connect(mapStateToProps)(EditExpensePage);