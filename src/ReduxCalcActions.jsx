import { useDispatch } from "react-redux";
import { calcAdd, calcDivide, calcMultiply, calcSubtract, clear, calculate } from "./slice/reduxCalcSlice";

// Component for calculator action/operation buttons
export default function ReduxCalcActions() {
    const dispatch = useDispatch();

    function onButtonPress(evt) {
        if (evt.target.tagName == "BUTTON") {
            switch (evt.target.value) {
                case "+": dispatch(calcAdd()); break;
                case "-": dispatch(calcSubtract()); break;
                case "*": dispatch(calcMultiply()); break;
                case "/": dispatch(calcDivide()); break;
                case "C": dispatch(clear()); break;
                case "=": dispatch(calculate()); break;
            }
        }
    }

    return (
        <div className="calc-actions" onClick={onButtonPress}>
            {["C", "+", "-", "*", "/", "="].map((btn) => <button key={btn} value={btn}>{btn}</button>)}
        </div>
    );
}