const sanitiseInput = (str: string) => {
  // turn to lowercase & remove non-alphanumeric characters
  let input = Array.from(str)
  input = input.map((letter: string) => {
    // use regex to test for alphanumeric-ness (alphanumericity?)
    if (/\w/gi.test(letter) === false || letter === '_') return

    // transform letter to lowercase and put it back in the array
    return letter.toLowerCase()
  })
  return input
}

function palindrome(str: string) {
  let inputArr = sanitiseInput(str)
  let reversedInputArr = [...inputArr].reverse()

  return inputArr.join('') === reversedInputArr.join('')
}

export default palindrome
