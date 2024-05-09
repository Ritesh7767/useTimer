import { useEffect, useState } from "react"

const useTimer = () => {

    let [timer, setTimer] = useState(0)
    let [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let timeInterval = null

        if(isRunning){
            timeInterval = setInterval(() => setTimer(prev => prev + 1), 1000)
        }
        else{
            clearInterval(timeInterval)
        }

        return () => clearInterval(timeInterval)
    }, [isRunning])

    const handleStart = () => setIsRunning(true)
    const handleStop = () => setIsRunning(false)
    const handleReset = () => {
        setTimer(0)
        setIsRunning(false)
    }


    return [timer, isRunning, handleStart, handleStop, handleReset]
}

export default useTimer