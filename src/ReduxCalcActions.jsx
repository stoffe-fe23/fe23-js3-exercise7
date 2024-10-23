import { useDispatch } from "react-redux";
import { calcAdd, calcDivide, calcMultiply, calcSubtract, clear, calculate } from "./slice/reduxCalcSlice";


export default function ReduxCalcActions() {
    const dispatch = useDispatch();

    function onButtonPress(evt) {
        if (evt.target.tagName == "BUTTON") {
            switch (evt.target.value) {
                case "add": dispatch(calcAdd()); break;
                case "subtract": dispatch(calcSubtract()); break;
                case "multiply": dispatch(calcMultiply()); break;
                case "divide": dispatch(calcDivide()); break;
                case "clear": dispatch(clear()); break;
                case "calculate": dispatch(calculate()); break;
            }
        }
    }

    return (
        <div className="calc-actions" onClick={onButtonPress}>
            <button value="clear">C</button>
            <button value="add">+</button>
            <button value="subtract">-</button>
            <button value="multiply">*</button>
            <button value="divide">/</button>
            <button value="calculate">=</button>

        </div>
    );
}