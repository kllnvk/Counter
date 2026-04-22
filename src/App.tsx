import './App.css'
import {Counter} from "./components/Counter.tsx";
import CounterSettings from "./components/CounterSettings.tsx";



function App() {
    // const START_KEY = "startValue"
    // const MAX_KEY = "maxValue"
    //
    // const savedStart = localStorage.getItem(START_KEY);
    // const savedMax = localStorage.getItem(MAX_KEY);
    //
    // const [startValue, setStartValue] = useState<number>(savedStart ? Number(savedStart) : 0)
    // const [maxValue, setMaxValue] = useState<number>(savedMax ? Number(savedMax) : 5)
    //
    // useEffect(() => {
    //     localStorage.setItem(START_KEY,  startValue.toString())
    //     localStorage.setItem(MAX_KEY,  maxValue.toString())
    // }, [startValue, maxValue])

    return (
        <>
            <CounterSettings />
            <Counter />
        </>
    )
}

export default App
