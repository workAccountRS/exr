addBtn.addEventListener('click' , add)

function add(){
  const currentNumber = currentResultOutput.textContent
  currentCalculationOutput.textContent = currentNumber + " + " + userInput.value
  currentResultOutput.textContent = +currentNumber + +userInput.value;
}

subtractBtn.addEventListener('click' , subtract)

function subtract(){
  const currentNumber = currentResultOutput.textContent
  currentCalculationOutput.textContent = currentNumber + " - " + userInput.value
  currentResultOutput.textContent = +currentNumber - +userInput.value;
}