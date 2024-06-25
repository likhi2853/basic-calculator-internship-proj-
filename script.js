   let display = document.getElementById('display');
   let currentInput = '';
   let operator = null;
   let firstOperand = null;

   function appendNumber(number) {
       if (currentInput === '' && number === 0) return;
       currentInput += number;
       updateDisplay(currentInput);
   }

   function appendOperator(op) {
       if (currentInput === '') return;
       if (operator) {
           calculateResult();
       }
       firstOperand = parseFloat(currentInput);
       operator = op;
       currentInput = '';
   }

   function appendDecimal() {
       if (!currentInput.includes('.')) {
           currentInput += '.';
           updateDisplay(currentInput);
       }
   }

   function clearDisplay() {
       currentInput = '';
       operator = null;
       firstOperand = null;
       updateDisplay('0');
   }

   function calculateResult() {
       if (operator === null || currentInput === '') return;
       const secondOperand = parseFloat(currentInput);
       let result;
       switch (operator) {
           case '+':
               result = firstOperand + secondOperand;
               break;
           case '-':
               result = firstOperand - secondOperand;
               break;
           case '*':
               result = firstOperand * secondOperand;
               break;
           case '/':
               if (secondOperand === 0) {
                   alert('Cannot divide by zero');
                   clearDisplay();
                   return;
               }
               result = firstOperand / secondOperand;
               break;
       }
       updateDisplay(result);
       currentInput = result.toString();
       operator = null;
       firstOperand = null;
   }

   function updateDisplay(value) {
       display.innerText = value;
   }