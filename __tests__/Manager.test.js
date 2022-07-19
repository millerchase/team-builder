const Manager = require('../lib/Manager');

test('test manager object was created', () => {
  const manager = new Manager('Dave', 1, 'dave@email.com', 23);

  expect(manager.name).toBe('Dave');
  expect(manager.id).toEqual(1);
  expect(manager.email).toBe('dave@email.com');
  expect(manager.officeNumber).toEqual(23);
});

test('new and inherited getters work', () => {
  const manager = new Manager('Dave', 1, 'dave@email.com', 23);

  expect(manager.getName()).toBe('Dave');
  expect(manager.getId()).toEqual(1);
  expect(manager.getEmail()).toBe('dave@email.com');
  expect(manager.getOfficeNumber()).toEqual(23);
  expect(manager.getRole()).toBe('Manager');
});
