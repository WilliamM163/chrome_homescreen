import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'

function Clock() {
    const [time, setTime] = useState(new Date())
    const clockSettings = useSelector((state) => state.clock)
    const { showsSeconds, is24Hour, font } = clockSettings;

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000)
    }, [time])

    const formatTime = () => {
        const hours = time.getHours();
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');

        if (showsSeconds && is24Hour) {
            return `${String(hours).padStart(2, '0')} : ${minutes} : ${seconds}`;
        } else if (showsSeconds && !is24Hour) {
            const hour12 = hours % 12 === 0 ? 12 : hours % 12;
            const period = hours < 12 ? 'AM' : 'PM';
            return `${String(hour12).padStart(2, '0')} : ${minutes} : ${seconds} ${period}`;
        } else if (!showsSeconds && is24Hour) {
            return `${String(hours).padStart(2, '0')} : ${minutes}`;
        } else { // (!showsSeconds && !is24Hour)
            const hour12 = hours % 12 === 0 ? 12 : hours % 12;
            const period = hours < 12 ? 'AM' : 'PM';
            return `${String(hour12).padStart(2, '0')} : ${minutes} ${period}`;
        }
    };

    return <p className='clock' style={font}>{formatTime()}</p>
}

export default Clock