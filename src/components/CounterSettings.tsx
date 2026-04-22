import {useState} from "react";
import {changeCounterValuesAC, changeEditModeAC} from "../features/counterReducer";
import {selectCounterValue, selectEditMode, selectMaxValue, selectStartValue} from "../features/counterSelectors";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {useAppSelector} from "../hooks/useAppSelector";
import Button from "./Button.tsx";
import styles from "./Counter.module.css";
import Input from "./Input.tsx";

const CounterSettings = () => {
    const startValue = useAppSelector(selectStartValue);
    const maxValue = useAppSelector(selectMaxValue);
    const counterValue = useAppSelector(selectCounterValue);
    const editMode = useAppSelector(selectEditMode)

    const dispatch = useAppDispatch();

    const [tempStartValue, setTempStartValue] = useState<number>(startValue)
    const [tempMaxValue, setTempMaxValue] = useState<number>(maxValue)

    const error = tempStartValue < 0 || tempMaxValue <= tempStartValue
    const valueClassName = counterValue >= maxValue ? styles.valueText + ' ' + styles.max : styles.valueText

    const setStartValueHandler = (value: number) => {
        setTempStartValue(value)
        dispatch(changeEditModeAC({isEditMode: true}))
    }

    const setMaxValueHandler = (value: number) => {
        setTempMaxValue(value)
        dispatch(changeEditModeAC({isEditMode: true}))
    }

    const setButtonHandler = () => {
        dispatch(changeCounterValuesAC({startValue: tempStartValue, maxValue: tempMaxValue, counterValue: tempStartValue}))
        dispatch(changeEditModeAC({isEditMode: false}))
    }


    return (
        <div>
            <div>
                <div>
                    <span>max value:</span>
                    <Input value={tempMaxValue} onChange={setMaxValueHandler} type={"number"}/>
                </div>
                <div>
                    <span>start value:</span>
                    <Input value={tempStartValue} onChange={setStartValueHandler} type={"number"}/>
                </div>
            </div>
            <div>
                <Button title={"set"} disabled={!editMode || error} onClick={setButtonHandler}/>
            </div>
            <div>
                <h3 className={valueClassName}>{error ? "Incorrect value" : editMode ? "enter values and press 'set'" : counterValue}</h3>
            </div>
        </div>
    );
};

export default CounterSettings;