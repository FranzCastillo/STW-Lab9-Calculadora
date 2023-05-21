import React from 'react'

function App() {
  const [currentValue, setCurrentValue] = React.useState(0)
  const [lastValue, setLastValue] = React.useState(null)
  const [operation, setOperation] = React.useState('')
  const [isChain, setIsChain] = React.useState(false)

  /**
   * Checks if the current value is less than 9 characters
   * @returns {boolean}
   */
  const isLengthValid = () => currentValue.toString().length < 9

  /**
   * Clears the calculator and its memory
   */
  const handleClear = () => {
    setCurrentValue(0)
    setLastValue(null)
    setOperation('')
    setIsChain(false)
  }
  /**
   * Changes the sign of the current value
   */
  const handleSign = () => {
    if (isLengthValid()) {
      setCurrentValue((prevValue) => prevValue * -1)
    }
  }
  /**
   * Adds a decimal to the current value
   */
  const handleDecimal = () => {
    if (isLengthValid()) {
      setCurrentValue((prevValue) => (prevValue.includes('.') ? prevValue : `${prevValue}.`))
    }
  }
  /**
   * Performs the operation passed
   * @param operationPassed
   * @param a
   * @param b
   * @returns {number|*}
   */
  const operate = (operationPassed, a, b) => {
    switch (operationPassed) {
      case 'addition':
        return a + b
      case 'subtraction':
        return a - b
      case 'multiplication':
        return a * b
      case 'division':
        return a / b
      case 'mod':
        return a % b
      default:
        return 0
    }
  }
  const handleEquals = () => {
    if (!operation) return // Do nothing if there hasn't been an operation
    const result = operate(operation, Number(lastValue), Number(currentValue))
    setCurrentValue(result)
    setLastValue(result)
    setIsChain(true)
  }

  /**
   * Handles the operation passed
   * @param operationPressed
   */
  const handleOperation = (operationPressed) => {
    setOperation(operationPressed)
    if (!lastValue) { // If it's the first operation
      setLastValue(currentValue)
      setCurrentValue(0)
    } else if (isChain) { // If it's a chain operation
      setLastValue(currentValue)
    } else { // If it's a new operation (called if there is a second value)
      handleEquals()
    }
  }
  const handleNumber = (number) => {
    if (isLengthValid()) {
      if (isChain) { // Checks if it is a result of a chain operation and resets the display
        setCurrentValue(number)
        setIsChain(false)
        // setOperation('')
      } else { // If it's a new number
        setCurrentValue((prevValue) => (prevValue === 0 ? number : prevValue + number))
      }
    }
  }

  return (
    <div className="calculator">
      <div className="display">{currentValue}</div>
      <div className="buttons">
        <button
          type="button"
          value="clear"
          className="clear"
          onClick={handleClear}
        >
          C
        </button>
        <button
          type="button"
          value="sign"
          className="sign"
          onClick={handleSign}
        >
          +/-
        </button>
        <button
          type="button"
          value="mod"
          className="mod"
          onClick={() => handleOperation('mod')}
        >
          MOD
        </button>
        <button
          type="button"
          value="division"
          className="operation"
          onClick={() => handleOperation('division')}
        >
          /
        </button>
        <button
          type="button"
          value="7"
          className="number"
          onClick={() => handleNumber('7')}
        >
          7
        </button>
        <button
          type="button"
          value="8"
          className="number"
          onClick={() => handleNumber('8')}
        >
          8
        </button>
        <button
          type="button"
          value="9"
          className="number"
          onClick={() => handleNumber('9')}
        >
          9
        </button>
        <button
          type="button"
          value="multiplication"
          className="operation"
          onClick={() => handleOperation('multiplication')}
        >
          x
        </button>
        <button
          type="button"
          value="4"
          className="number"
          onClick={() => handleNumber('4')}
        >
          4
        </button>
        <button
          type="button"
          value="5"
          className="number"
          onClick={() => handleNumber('5')}
        >
          5
        </button>
        <button
          type="button"
          value="6"
          className="number"
          onClick={() => handleNumber('6')}
        >
          6
        </button>
        <button
          type="button"
          value="subtraction"
          className="operation"
          onClick={() => handleOperation('subtraction')}
        >
          -
        </button>
        <button
          type="button"
          value="1"
          className="number"
          onClick={() => handleNumber('1')}
        >
          1
        </button>
        <button
          type="button"
          value="2"
          className="number"
          onClick={() => handleNumber('2')}
        >
          2
        </button>
        <button
          type="button"
          value="3"
          className="number"
          onClick={() => handleNumber('3')}
        >
          3
        </button>
        <button
          type="button"
          value="addition"
          className="operation"
          onClick={() => handleOperation('addition')}
        >
          +
        </button>
        <button
          type="button"
          value="0"
          className="number"
          onClick={() => handleNumber('0')}
        >
          0
        </button>
        <button
          type="button"
          value="."
          className="number"
          onClick={handleDecimal}
        >
          .
        </button>
        <button
          type="button"
          value="="
          className="number"
          onClick={handleEquals}
        >
          =
        </button>
      </div>
    </div>
  )
}

export default App
