const largestFactor = require('../src/prime');

test('The largest prime factor of the number 600851475143 is ', () => {
  expect(largestFactor(600851475143)).toBe(6857);
})
