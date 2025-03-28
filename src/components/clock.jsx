import { useState, useEffect } from "react"

import styles from '../home.module.css'

function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000)
    }, [time])

    const hours = String(time.getHours()).padStart(2, '0')
    const minutes = String(time.getMinutes()).padStart(2, '0')
    const seconds = String(time.getSeconds()).padStart(2, '0')

    return <p className={styles.clock}>{hours} : {minutes} : {seconds}</p>
}

export default Clock