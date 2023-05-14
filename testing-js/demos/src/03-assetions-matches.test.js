// matchers
test('test object', () => {
  const data = { name: 'nico' };
  data.lastname = 'molina';
  expect(data).toEqual({ name: 'nico', lastname: 'molina' });
});

test('Null value', () => {
  const data = null;
  expect(data).toBeNull(); // the value of data should be null
  expect(data).toBeDefined(); // the value of data should be defined (even if it is null)
  expect(data).not.toBeUndefined(); // negation of an state.
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy(); // all of these should pass the test.
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Christoph').toMatch(/stop/); // toMatch(/stop/); is regular expression that will look for any match with the word "stop"
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
