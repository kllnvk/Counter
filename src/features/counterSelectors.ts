import type {RootState} from "../store";
import type {CounterValues} from "./counterReducer";

export const selectStartValue = (state: RootState): CounterValues['startValue'] => state.counter.startValue;
export const selectMaxValue = (state: RootState): CounterValues['maxValue'] => state.counter.maxValue;
export const selectCounterValue = (state: RootState): CounterValues['counterValue'] => state.counter.counterValue;
export const selectEditMode = (state: RootState): CounterValues['isEditMode'] => state.counter.isEditMode;