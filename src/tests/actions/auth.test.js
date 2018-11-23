import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
  const action = login('id123');
  expect(action.uid).toBe('id123');
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action.uid).toBe(undefined);
});