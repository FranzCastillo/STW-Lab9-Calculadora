import React, {useEffect, useState} from 'react';

const calculator = {
    displayValue: '0',
};

const App = () => {
    const [displayValue, setDisplayValue] = useState('0');

    const handleNumberClick = (event, number) => {
        if (!number) {
            number = event.target.textContent;
        }
        setDisplayValue((prevValue) => {
            return prevValue === '0' ? number : prevValue + number;
        });
    }

    const handleDecimalClick = (event) => {
        setDisplayValue((prevValue) => {
            // Append the pressed key to the current display value
            return prevValue.includes('.') ? prevValue : prevValue + '.';
        });
    }

    const handleBackspacePress = () => {
        setDisplayValue((prevValue) => {
            // Remove the last character from the current display value
            return prevValue.length === 1 ? '0' : prevValue.slice(0, -1);
        });
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;

            if (/^\d$/.test(key)) {
                handleNumberClick({target: {textContent: key}})
            } else if (key === '.') {
                handleDecimalClick();
            } else if (key === 'Backspace') {
                handleBackspacePress();
            } else if (key === 'Escape') {
                setDisplayValue('0');
            }
            // } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            //     setDisplayValue((prevValue) => {
            //         // Append the pressed key to the current display value
            //         return prevValue + key;
            //     });
            // } else if (key === 'Enter') {
            //     setDisplayValue((prevValue) => {
            //         // Append the pressed key to the current display value
            //         return eval(prevValue);
            //     });
            // }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="container">
            <div className="calculator">
                <div className="display">{displayValue}</div>
                <div className="buttons">
                    <button className="button-function" id="clear">
                        C
                    </button>
                    <button className="button-function" id="sign">
                        +/-
                    </button>
                    <button className="button-function" id="percentage">
                        %
                    </button>
                    <button className="button-operation" id="division">
                        ÷
                    </button>
                    <button className="button-number" id="seven" onClick={(event) => handleNumberClick(event, '7')}>
                        7
                    </button>
                    <button className="button-number" id="eight" onClick={(event) => handleNumberClick(event, '8')}>
                        8
                    </button>
                    <button className="button-number" id="nine" onClick={(event) => handleNumberClick(event, '9')}>
                        9
                    </button>
                    <button className="button-operation" id="multiplication">
                        x
                    </button>
                    <button className="button-number" id="four" onClick={(event) => handleNumberClick(event, '4')}>
                        4
                    </button>
                    <button className="button-number" id="five" onClick={(event) => handleNumberClick(event, '5')}>
                        5
                    </button>
                    <button className="button-number" id="six" onClick={(event) => handleNumberClick(event, '6')}>
                        6
                    </button>
                    <button className="button-operation" id="subtraction">
                        -
                    </button>
                    <button className="button-number" id="one" onClick={(event) => handleNumberClick(event, '1')}>
                        1
                    </button>
                    <button className="button-number" id="two" onClick={(event) => handleNumberClick(event, '2')}>
                        2
                    </button>
                    <button className="button-number" id="three" onClick={(event) => handleNumberClick(event, '3')}>
                        3
                    </button>
                    <button className="button-operation" id="addition">
                        +
                    </button>
                    <button className="button-number" id="zero">
                        0
                    </button>
                    <button className="button-number" id="decimal" onClick={handleDecimalClick}>
                        .
                    </button>
                    <button className="button-equal" id="equals">
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
