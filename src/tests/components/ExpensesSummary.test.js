import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render expenses sumamary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={195.20} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses sumamary with multiple expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={395.20} />);
  expect(wrapper).toMatchSnapshot();
});