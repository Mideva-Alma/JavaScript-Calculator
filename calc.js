// Array to store calculation history
const history = [];

function addToHistory(num1, num2, operator, result) {
  history.push({
    operands: [num1, num2],
    operator: operator,
    result: result
  });
}

// -- Basic Operation Functions --//

function add(num1, num2) {
  const result = num1 + num2;
  addToHistory(num1, num2, "+", result);
  return result;
}

function subtract(num1, num2) {
  const result = num1 - num2;
  addToHistory(num1, num2, "-", result);
  return result;
}

function multiply(num1, num2) {
  const result = num1 * num2;
  addToHistory(num1, num2, "*", result);
  return result;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero is not allowed.";
  }
  const result = num1 / num2;
  addToHistory(num1, num2, "/", result);
  return result;
}

// -- Display History Function --//

function displayHistory() {
    if (history.length === 0) {
      console.log("No calculations stored.");
      return;
    }
  
    console.log("Calculation History:");
  
    for (let i = 0; i < history.length; i++) {
      let entry = history[i];
      console.log(
        (i + 1) + ": " +
        entry.operands[0] + " " +
        entry.operator + " " +
        entry.operands[1] + " = " +
        entry.result
      );
    }
  }
  

//this is dummy data
console.log("Add:", add(10, 5));        
console.log("Subtract:", subtract(10, 5)); 
console.log("Multiply:", multiply(10, 5)); 
console.log("Divide:", divide(10, 5));     

// Display history
displayHistory();

//Next time add user input instead of dummy data