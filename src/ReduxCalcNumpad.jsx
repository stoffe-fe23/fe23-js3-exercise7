import { useDispatch } from "react-redux";
import { incNextValue } from "./slice/reduxCalcSlice";


export default function ReduxCalcNumpad() {

    const dispatch = useDispatch();

    function onButtonPress(evt) {
        if (evt.target.tagName == "BUTTON") {
            dispatch(incNextValue(evt.target.value));
        }
    }

    return (
        <div className="calc-numpad" onClick={onButtonPress}>
            {
                [7, 8, 9, 4, 5, 6, 1, 2, 3, "-", 0, "."].map((btn) => <button key={btn} value={btn}>{btn}</button>)
            }
        </div>
    );
}