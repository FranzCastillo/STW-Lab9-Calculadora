import React, {useEffect, useState} from 'react';

const calculator = {
    displayValue: '0',
};

const App = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);

    const handleNumberPress = (event, number) => {
        if (!number) {
            number = event.target.textContent;
        }
        setCurrentValue((prevValue) => {
            return prevValue === 0 ? number : prevValue + number;
        });
    }

    const handleDecimalPress = () => {
        setCurrentValue((prevValue) => {
            // Append the pressed key to the current display value
            return prevValue.includes('.') ? prevValue : prevValue + '.';
        });
    }

    const handleBackspacePress = () => {
        setCurrentValue((prevValue) => {
            // Remove the last character from the current display value
            return prevValue.length === 1 ? '0' : prevValue.slice(0, -1);
        });
    }

    const handleOperationPress = (event, operation) => {
        if(!operation) {
            operation = event.target.textContent;
        }
        setPreviousValue(currentValue);
        setCurrentValue(0);
    }

    const handleEqualsPress = () => {
    };

    const handleClear = () => {
        setCurrentValue(0);
        setPreviousValue(null);
    }

    const handleSignPress = () => {

    }

    const handlePercentagePress = () => {

    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;

            if (/^\d$/.test(key)) {
                handleNumberPress({target: {textContent: key}})
            } else if (key === '.') {
                handleDecimalPress();
            } else if (key === 'Backspace') {
                handleBackspacePress();
            } else if (key === 'Escape') {
                handleClear();
            } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                handleOperationPress({target: {textContent: key}});
            } else if (key === 'Enter') {
                handleEqualsPress();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="container">
            <div className="calculator">
                <div className="display">{currentValue}</div>
                <div className="buttons">
                    <button className="button-function" id="clear" onClick={handleClear}>
                        C
                    </button>
                    <button className="button-function" id="sign" onClick={handleSignPress}>
                        +/-
                    </button>
                    <button className="button-function" id="percentage" onClick={handlePercentagePress}>
                        %
                    </button>
                    <button className="button-operation" id="division" onClick={(event) => handleOperationPress(event, '/')}>
                        ÷
                    </button>
                    <button className="button-number" id="seven" onClick={(event) => handleNumberPress(event, '7')}>
                        7
                    </button>
                    <button className="button-number" id="eight" onClick={(event) => handleNumberPress(event, '8')}>
                        8
                    </button>
                    <button className="button-number" id="nine" onClick={(event) => handleNumberPress(event, '9')}>
                        9
                    </button>
                    <button className="button-operation" id="multiplication" onClick={(event) => handleOperationPress(event, '*')}>
                        x
                    </button>
                    <button className="button-number" id="four" onClick={(event) => handleNumberPress(event, '4')}>
                        4
                    </button>
                    <button className="button-number" id="five" onClick={(event) => handleNumberPress(event, '5')}>
                        5
                    </button>
                    <button className="button-number" id="six" onClick={(event) => handleNumberPress(event, '6')}>
                        6
                    </button>
                    <button className="button-operation" id="subtraction" onClick={(event) => handleOperationPress(event, '-')}>
                        -
                    </button>
                    <button className="button-number" id="one" onClick={(event) => handleNumberPress(event, '1')}>
                        1
                    </button>
                    <button className="button-number" id="two" onClick={(event) => handleNumberPress(event, '2')}>
                        2
                    </button>
                    <button className="button-number" id="three" onClick={(event) => handleNumberPress(event, '3')}>
                        3
                    </button>
                    <button className="button-operation" id="addition" onClick={(event) => handleOperationPress(event, '+')}>
                        +
                    </button>
                    <button className="button-number" id="zero" onClick={(event) => handleNumberPress(event, '0')}>
                        0
                    </button>
                    <button className="button-number" id="decimal" onClick={handleDecimalPress}>
                        .
                    </button>
                    <button className="button-equal" id="equals" onClick={handleEqualsPress}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
