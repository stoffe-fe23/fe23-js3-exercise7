import { useSelector } from "react-redux";
import ReduxCalcNextValue from "./ReduxCalcNextValue";
import { selectCurrentValue } from "./slice/reduxCalcSlice";
import ReduxCalcNumpad from "./ReduxCalcNumpad";
import ReduxCalcActions from "./ReduxCalcActions";


export default function ReduxCalc() {
    const currValue = useSelector(selectCurrentValue);

    return (
        <div className="calculator">
            <div className="current-value">{currValue}</div>
            <div className="buttons">
                <div className="col-left">
                    <ReduxCalcNextValue />
                    <ReduxCalcNumpad />
                </div>
                <ReduxCalcActions />
            </div>
        </div>
    );
}