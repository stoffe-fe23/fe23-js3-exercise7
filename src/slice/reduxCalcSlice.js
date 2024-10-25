import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentValue: 0,
    nextValue: 0,
    lastOp: " "
}

// Support function for the actions below... 
function calcValue(valueA, valueB, operation) {
    valueA = Number(valueA);
    valueB = Number(valueB);

    // First current value
    if ((valueA == 0) && (operation == " "))
        return valueB;

    switch (operation) {
        case "+": return valueA + valueB; break;
        case "-": return valueA - valueB; break;
        case "*": return valueA * valueB; break;
        case "/": return valueA / valueB; break;
    }
    return valueA;
}

export const reduxCalcSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        // Concatenate the number input by the user, as a string (as number buttons are pressed). 
        incNextValue: (state, action) => {
            let nextVal = state.nextValue;
            // Remove initial zero value when starting to type numbers, unless its a decimal value.
            if ((nextVal == "0") && (action.payload != ".")) {
                nextVal = "";
            }
            // negative value toggle.
            if (action.payload == "-") {
                state.nextValue = nextVal.includes("-") ? nextVal.slice(1) : action.payload + nextVal;
            }
            else {
                state.nextValue = nextVal + action.payload;
            }
        },
        calcAdd: (state, action) => {
            state.currentValue = calcValue(state.currentValue, state.nextValue, state.lastOp);
            state.lastOp = "+";
            state.nextValue = 0;
        },
        calcSubtract: (state, action) => {
            state.currentValue = calcValue(state.currentValue, state.nextValue, state.lastOp);
            state.lastOp = "-";
            state.nextValue = 0;
        },
        calcMultiply: (state, action) => {
            state.currentValue = calcValue(state.currentValue, state.nextValue, state.lastOp);
            state.lastOp = "*";
            state.nextValue = 0;
        },
        calcDivide: (state, action) => {
            state.currentValue = calcValue(state.currentValue, state.nextValue, state.lastOp);
            state.lastOp = "/";
            state.nextValue = 0;
        },
        // Clear the calculator, starting over at 0
        clear: (state, action) => {
            state.currentValue = 0;
            state.nextValue = 0;
            state.lastOp = " ";
        },
        // Calculate final value (if no more operations are to be made)
        calculate: (state, action) => {
            state.currentValue = calcValue(state.currentValue, state.nextValue, state.lastOp);
            state.lastOp = " ";
            state.nextValue = 0;
        }
    },
    selectors: {
        selectNextValue: (state) => state.nextValue,
        selectCurrentValue: (state) => state.currentValue,
        selectLastOp: (state) => state.lastOp
    }
});


export const { incNextValue, calcAdd, calcSubtract, calcMultiply, calcDivide, clear, calculate } = reduxCalcSlice.actions;
export const { selectNextValue, selectCurrentValue, selectLastOp } = reduxCalcSlice.selectors;
export default reduxCalcSlice.reducer;