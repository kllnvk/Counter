import {incrementCounterAC, resetCounterAC} from "../features/counterReducer";
import {selectCounterValue, selectEditMode, selectMaxValue, selectStartValue} from "../features/counterSelectors";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {useAppSelector} from "../hooks/useAppSelector";
import Button from "./Button.tsx";

export const Counter = () => {
    const startValue = useAppSelector(selectStartValue);
    const maxValue = useAppSelector(selectMaxValue);
    const counterValue = useAppSelector(selectCounterValue);
    const editMode = useAppSelector(selectEditMode);
    const dispatch = useAppDispatch();

    const disabledIncrement = counterValue === maxValue || editMode
    const disabledReset = counterValue === startValue || editMode

    const increment = () => {
        dispatch(incrementCounterAC())
    }

    const reset = () => {
        dispatch(resetCounterAC())
    }


    return (
            <div>
                <Button title={"inc"} disabled={disabledIncrement} onClick={increment}/>
                <Button title={"reset"} disabled={disabledReset} onClick={reset}/>
            </div>
    )
}