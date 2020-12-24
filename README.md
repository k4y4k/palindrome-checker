# Palindrome Checker

![Written in TypeScript](https://img.shields.io/badge/written%20in-typescript-informational?style=for-the-badge)
![Codecov](https://img.shields.io/codecov/c/gh/k4y4k/palindrome-checker?color=informational&style=for-the-badge)

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A palindrome is a word or sentence that's spelled the same way both forward and
backward, ignoring punctuation, case, and spacing.

**Note:** You'll need to remove **all non-alphanumeric characters**
(punctuation, spaces and symbols) and turn everything into the same case (lower
or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `"racecar"`, `"RaceCar"`, and
`"race CAR"` among others.

We'll also pass strings with special symbols, such as `"2A3*3a2"`, `"2A3 3a2"`,
and `"2_A3*3#A2"`.

## Testing

`yarn jest` should get you going.
