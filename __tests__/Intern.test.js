const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern(
    'Dave',
    1,
    'dave@email.com',
    'University of Texas, Austin'
  );

  expect(intern.name).toBe('Dave');
  expect(intern.id).toEqual(1);
  expect(intern.email).toBe('dave@email.com');
  expect(intern.school).toBe('University of Texas, Austin');
});

test('gets intern information', () => {
  const intern = new Intern(
    'Dave',
    1,
    'dave@email.com',
    'University of Texas, Austin'
  );

  expect(intern.getName()).toBe('Dave');
  expect(intern.getId()).toEqual(1);
  expect(intern.getEmail()).toBe('dave@email.com');
  expect(intern.getSchool()).toBe('University of Texas, Austin');
  expect(intern.getRole()).toBe('Intern');
});
