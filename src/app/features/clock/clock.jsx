import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'

import styles from './clock.module.css'

function Clock() {
    const [time, setTime] = useState(new Date())
    const clockSettings = useSelector((state) => state.clock)

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000)
    }, [time])

    let hours;
    if (clockSettings.is24Hour) {
        hours = String(time.getHours()).padStart(2, '0')
    } else {
        hours = String(time.getHours() % 12).padStart(2, '0')
    }
    const minutes = String(time.getMinutes()).padStart(2, '0')
    const seconds = String(time.getSeconds()).padStart(2, '0')

    if (clockSettings.showsSeconds) {
        return <p className={styles.clock} style={clockSettings.font}>{hours} : {minutes} : {seconds}</p>
    } else {
        return <p className={styles.clock} style={clockSettings.font}>{hours} : {minutes}</p>
    }
}

export default Clock