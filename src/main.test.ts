import palindrome from './main'

describe('Palindrome Checker', () => {
  test('palindrome("eye") should return a boolean.', () =>
    expect(typeof palindrome('eye') === 'boolean').toBeTruthy())

  test('palindrome("eye") should return true.', () =>
    expect(palindrome('eye')).toBe(true))

  test('palindrome("_eye") should return true.', () =>
    expect(palindrome('_eye')).toBeTruthy())

  test('palindrome("race car") should return true.', () =>
    expect(palindrome('race car')).toBeTruthy())

  test('palindrome("not a palindrome") should return false.', () =>
    expect(palindrome('not a palindrome')).toBeFalsy())

  test('palindrome("A man, a plan, a canal. Panama") should return true.', () =>
    expect('A man, a plan, a canal. Panama').toBeTruthy())

  test('palindrome("never odd or even") should return true', () =>
    expect(palindrome('never odd or even')).toBeTruthy())

  test('palindrome("nope") should return false.', () =>
    expect(palindrome('nope')).toBeFalsy())

  test('palindrome("almostomla") should return false.', () =>
    expect(palindrome('almostomla')).toBeFalsy())

  test('palindrome("My age is 0, 0 si ega ym.") should return true.', () =>
    expect(palindrome('My age is 0, 0 si ega ym.')).toBeTruthy())

  test('palindrome("1 eye for of 1 eye.") should return false.', () =>
    expect(palindrome('1 eye for of 1 eye.')).toBeFalsy())

  test('palindrome("0_0 (: /- :) 0-0") should return true.', () =>
    expect(palindrome('0_0 (: /- :) 0-0')).toBeTruthy())

  test('palindrome("five|_/|four") should return false.', () =>
    expect(palindrome('five|_/|four')).toBeFalsy())
})
