function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a && b !== 0) {
    return a / b;
  } else {
    return null
  }
}

module.exports = {
  sum,
  multiply,
  divide
}
