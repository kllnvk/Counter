import './App.css'
import {useEffect, useState} from "react";
import {Counter} from "./components/Counter.tsx";
import CounterSettings from "./components/CounterSettings.tsx";



function App() {
    const START_KEY = "startValue"
    const MAX_KEY = "maxValue"

    const savedStart = localStorage.getItem(START_KEY);
    const savedMax = localStorage.getItem(MAX_KEY);

    const [startValue, setStartValue] = useState<number>(savedStart ? Number(savedStart) : 0)
    const [maxValue, setMaxValue] = useState<number>(savedMax ? Number(savedMax) : 5)

    useEffect(() => {
        localStorage.setItem(START_KEY,  startValue.toString())
        localStorage.setItem(MAX_KEY,  maxValue.toString())
    }, [startValue, maxValue])

    const [tempStartValue, setTempStartValue] = useState<number>(startValue)
    const [tempMaxValue, setTempMaxValue] = useState<number>(maxValue)

    const [counterValue, setCounterValue] = useState<number>(startValue)
    const [editMode, setEditMode] = useState<boolean>(false)


    const error = tempStartValue < 0 || tempMaxValue <= tempStartValue
    return (
        <>
            <CounterSettings editMode={editMode}
                             setStartValue={setStartValue}
                             setMaxValue={setMaxValue}
                             setEditMode={setEditMode}
                             error={error}
                             setCounterValue={setCounterValue}
                             setTempStartValue={setTempStartValue}
                             setTempMaxValue={setTempMaxValue}
                             tempStartValue={tempStartValue}
                             tempMaxValue={tempMaxValue}
            />
            <Counter error={error}
                     startValue={startValue}
                     maxValue={maxValue}
                     editMode={editMode}
                     counterValue={counterValue}
                     setCounterValue={setCounterValue}
            />
        </>
    )
}

export default App
