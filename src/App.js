import React from "react";

const App = () => {
    return (
        <div className={"container"}>
            <div className={"calculator"}>
                <div className={"display"}>
                    0
                </div>
                <div className={"buttons"}>
                    <button className={"button-function"} id={"clear"}>C</button>
                    <button className={"button-function"} id={"sign"}>+/-</button>
                    <button className={"button-function"} id={"percentage"}>%</button>
                    <button className={"button-operation"} id={"division"}>÷</button>
                    <button className={"button-number"} id={"seven"}>7</button>
                    <button className={"button-number"} id={"eight"}>8</button>
                    <button className={"button-number"} id={"nine"}>9</button>
                    <button className={"button-operation"} id={"multiplication"}>x</button>
                    <button className={"button-number"} id={"four"}>4</button>
                    <button className={"button-number"} id={"five"}>5</button>
                    <button className={"button-number"} id={"six"}>6</button>
                    <button className={"button-operation"} id={"subtraction"}>-</button>
                    <button className={"button-number"} id={"one"}>1</button>
                    <button className={"button-number"} id={"two"}>2</button>
                    <button className={"button-number"} id={"three"}>3</button>
                    <button className={"button-operation"} id={"addition"}>+</button>
                    <button className={"button-number"} id={"zero"}>0</button>
                    <button className={"button-number"} id={"decimal"}>.</button>
                    <button className={"button-equal"} id={"equals"}>=</button>
                </div>
            </div>
        </div>
    );
};

export default App;