const Employee = require('../lib/Employee');

// tests employee object was created
test('creates an employee object', () => {
  const employee = new Employee('Dave', 1, 'dave@email.com');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(1);
  expect(employee.email).toBe('dave@email.com');
});

test('gets employee information', () => {
  const employee = new Employee('Dave', 1, 'dave@email.com');

  expect(employee.getName()).toBe('Dave');
  expect(employee.getId()).toEqual(1);
  expect(employee.getEmail()).toBe('dave@email.com');
  expect(employee.getRole()).toBe('Employee');
});
