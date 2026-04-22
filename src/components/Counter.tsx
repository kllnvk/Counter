import Button from "./Button.tsx";
import styles from "./Counter.module.css";

type CounterProps = {
    startValue: number
    maxValue: number
    editMode: boolean
    error: boolean
    counterValue: number
    setCounterValue: (counterValue: number) => void
}

export const Counter = ({startValue, maxValue, editMode, error, counterValue, setCounterValue}: CounterProps) => {
    const disabledIncrement = editMode || error || counterValue === maxValue
    const disabledReset = error || editMode || counterValue === startValue
    const valueClassName = (error || (!editMode && counterValue >= maxValue)) ? styles.valueText + ' ' + styles.max : styles.valueText

    const increment = () => {
        if (counterValue >= maxValue) {
            setCounterValue(maxValue)
        } else {
            setCounterValue(counterValue + 1)
        }

    }

    const reset = () => {
        setCounterValue(startValue)
    }


    return (
        <div>
            <div>
                <h3 className={valueClassName}>{error ? "Incorrect value" : editMode ? "enter values and press 'set'" : counterValue}</h3>
            </div>
            <div>
                <Button title={"inc"} disabled={disabledIncrement} onClick={increment}/>
                <Button title={"reset"} disabled={disabledReset} onClick={reset}/>
            </div>
        </div>
    )
}