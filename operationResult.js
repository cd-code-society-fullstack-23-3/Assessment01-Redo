const operationResult=(num1, num2, operation) =>{
    if (operation === "add") {
      return num1 + num2;
    } else if (operation === "subtract") {
      return num1 - num2;
    } else if (operation === "multiply") {
      return num1 * num2;
    } else if (operation === "divide") {
      if (num2 === 0) {
        return "Undefined"; // Division by zero is undefined
      }
      return Math.floor(num1 / num2); // Ensure the result is an integer
    } else {
      return "Invalid Operation"; // Handle invalid operation strings
    }
  }

  module.exports = operationResult; 