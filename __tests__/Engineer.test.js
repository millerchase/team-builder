const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('Dave', 1, 'dave@email.com', 'daveHub');

  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toEqual(1);
  expect(engineer.email).toBe('dave@email.com');
  expect(engineer.github).toBe('daveHub');
});

test('gets engineer information', () => {
  const engineer = new Engineer('Dave', 1, 'dave@email.com', 'daveHub');

  expect(engineer.getName()).toBe('Dave');
  expect(engineer.getId()).toEqual(1);
  expect(engineer.getEmail()).toBe('dave@email.com');
  expect(engineer.getGithub()).toBe('daveHub');
  expect(engineer.getRole()).toBe('Engineer');
});
