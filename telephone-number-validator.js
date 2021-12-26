function telephoneCheck(str) {
  // If not pair of brackets
  if (
    (str.includes(')') && !str.includes('(')) ||
    (str.includes('(') && !str.includes(')'))
  ) {
    return false
  }
  const checkFormat =
    /^[1]?[\s]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/im

  if (str.match(checkFormat)) {
    return true
  } else {
    return false
  }
}

telephoneCheck('555-555-5555')
