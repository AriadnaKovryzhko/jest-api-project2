
const isValidName = require('../../src/utils/validator');

test('valid name', () => expect(isValidName('Alex')).toBe(true));
test('empty string', () => expect(isValidName('')).toBe(false));
test('spaces only', () => expect(isValidName('   ')).toBe(false));
test('number input', () => expect(isValidName(123)).toBe(false));
test('null input', () => expect(isValidName(null)).toBe(false));
test('undefined input', () => expect(isValidName(undefined)).toBe(false));
test('long string', () => expect(isValidName('a'.repeat(51))).toBe(false));
test('boundary 50 chars', () => expect(isValidName('a'.repeat(50))).toBe(true));
test('special chars', () => expect(isValidName('@name')).toBe(true));
test('trim works', () => expect(isValidName(' Alex ')).toBe(true));
