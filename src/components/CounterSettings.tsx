import Button from "./Button.tsx";
import Input from "./Input.tsx";

type CounterSettingsProps = {
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    editMode: boolean
    setEditMode: (value: boolean) => void
    error: boolean
    setCounterValue: (value: number) => void
    setTempStartValue: (value: number) => void
    setTempMaxValue: (value: number) => void
    tempStartValue: number
    tempMaxValue: number
}

const CounterSettings = ({
                             setStartValue, setMaxValue, editMode,
                             setEditMode, error, setCounterValue, setTempStartValue,
                             setTempMaxValue, tempStartValue, tempMaxValue
                         }: CounterSettingsProps) => {

    const setStartValueHandler = (value: number) => {
        setTempStartValue(value)
        setEditMode(true)
    }

    const setMaxValueHandler = (value: number) => {
        setTempMaxValue(value)
        setEditMode(true)

    }

    const setButtonHandler = () => {
        setEditMode(false)
        setStartValue(tempStartValue)
        setMaxValue(tempMaxValue)
        setCounterValue(tempStartValue)
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
        </div>
    );
};

export default CounterSettings;