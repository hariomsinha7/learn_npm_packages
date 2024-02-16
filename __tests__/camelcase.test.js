import createCamelCase from '../src/utils/camelcase.js';

test('camel case', () => {
  expect(createCamelCase('jagat jeevan sahoo')).toEqual('Jagat Jeevan Sahoo');
});
