function divideBy(firstNumber) {
  return function (secondNumber) {
    return firstNumber / secondNumber
  };
}

function addBy(firstNumber) {
  return function (secondNumber) {
    return firstNumber + secondNumber
  };
}
