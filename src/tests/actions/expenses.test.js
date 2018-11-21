import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 5 });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 5
  });
});

test('should setup edit expense action object', () => {
  const updates = {
    description: 'new',
    note: 'expense',
    amount: 50
  }
  const action = editExpense('5', updates);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '5',
    updates: {
      description: 'new',
      note: 'expense',
      amount: 50
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const newData = {
    description: 'Rent',
    amount: 109200,
    createdAt: 1230,
    note: 'house'
  }
  const action = addExpense(newData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...newData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});