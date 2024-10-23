import { useSelector } from "react-redux";
import { selectNextValue, selectLastOp } from "./slice/reduxCalcSlice";


export default function ReduxCalcNextValue() {

    const nextValue = useSelector(selectNextValue);
    const lastOp = useSelector(selectLastOp)

    return (
        <div className="input-display">
            <div className="last-op">{lastOp}</div>
            <div className="next-value">{nextValue}</div>
        </div>
    );
}