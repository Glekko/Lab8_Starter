// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Tests for isPhoneNumber function
test('Valid phone number 1', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBeTruthy();
});

test('Valid phone number 2', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBeTruthy();
});

test('Invalid phone number 1', () => {
  expect(functions.isPhoneNumber('123-45-7890')).toBeFalsy();
});

test('Invalid phone number 2', () => {
  expect(functions.isPhoneNumber('123-456-789')).toBeFalsy();
});

// Tests for isEmail function
test('Valid email 1', () => {
  expect(functions.isEmail('john@example.com')).toBeTruthy();
});

test('Valid email 2', () => {
  expect(functions.isEmail('jane_doe@example.co')).toBeTruthy();
});

test('Invalid email 1', () => {
  expect(functions.isEmail('johnexample.com')).toBeFalsy();
});

test('Invalid email 2', () => {
  expect(functions.isEmail('jane_doe@example')).toBeFalsy();
});

// Tests for isStrongPassword function
test('Valid password 1', () => {
  expect(functions.isStrongPassword('Password123')).toBeTruthy();
});

test('Valid password 2', () => {
  expect(functions.isStrongPassword('a1234567890')).toBeTruthy();
});

test('Invalid password 1', () => {
  expect(functions.isStrongPassword('1234567890')).toBeFalsy();
});

test('Invalid password 2', () => {
  expect(functions.isStrongPassword('a')).toBeFalsy();
});

// Tests for isDate function
test('Valid date 1', () => {
  expect(functions.isDate('01/01/2023')).toBeTruthy();
});

test('Valid date 2', () => {
  expect(functions.isDate('12/31/2023')).toBeTruthy();
});

test('Invalid date 1', () => {
  expect(functions.isDate('01/01/23')).toBeFalsy();
});

test('Invalid date 2', () => {
  expect(functions.isDate('12-31-2023')).toBeFalsy();
});

// Tests for isHexColor function
test('Valid hex color 1', () => {
  expect(functions.isHexColor('#123456')).toBeTruthy();
});

test('Valid hex color 2', () => {
  expect(functions.isHexColor('#abc')).toBeTruthy();
});

test('Invalid hex color 1', () => {
  expect(functions.isHexColor('123456Z')).toBeFalsy();
});

test('Invalid hex color 2', () => {
  expect(functions.isHexColor('#12345')).toBeFalsy();
});
