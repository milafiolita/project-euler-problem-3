const each = require('jest-each');

const largestFactor = require('../src/prime');

describe('.isPrime', () => {
  each([
	[600851475143, 6857],
	[13195, 29],
	[49, 7],
]).test('The largest prime factor of', (a, expected) => {
  expect(largestFactor(a)).toBe(expected);
});
});
