import moment from 'moment'

const expenses = [{
  id: '1',
  description: 'Bin',
  note: '',
  amount: 3000,
  createdAt: 0
}, {
  id: '2',
  description: 'Gloves',
  note: '',
  amount: 50000,
  createdAt: moment(0).subtract(10, 'days').valueOf()
}, {
  id: '3',
  description: 'Cards',
  note: '',
  amount: 500,
  createdAt: moment(0).add(10, 'days').valueOf()
}];

export default expenses;