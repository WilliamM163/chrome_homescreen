import { useSelector, useDispatch } from 'react-redux'
import { set12Hour, set24Hour, enableSeconds, disableSeconds } from './clockSlice'

import ChangeClockFont from './changeClockFont'
import styles from './clockSettings.module.css'

function ClockSettings() {
    const dispatch = useDispatch()

    // 12 Hour time or 24 Hour time
    const is24Hour = useSelector((state) => state.clock.is24Hour)
    const changeHours = (event) => {
        const id = event.target.id
        switch (id) { 
            case '12-hour': {
                dispatch(set12Hour())
                break
            }
            case '24-hour': {
                dispatch(set24Hour())
                break
            }
        }
    }

    // Show seconds hand or not
    const showsSeconds = useSelector((state) => state.clock.showsSeconds)
    const toggleCheckbox = () => {
        if (showsSeconds === false) {
            dispatch(enableSeconds())
        } else {
            dispatch(disableSeconds())
        }
    }

    return (
        <div className={styles.clockSettings}>
            <ChangeClockFont />
            <input type="radio" id="12-hour" checked={!is24Hour} onClick={changeHours}/>
            <label htmlFor="12-hour">12 Hour Clock</label>
            <br />
            <input type="radio" id="24-hour" checked={is24Hour} onClick={changeHours}/>
            <label htmlFor="24-hour">24 Hour Clock</label>
            <br />
            <input type="checkbox" id="enable-seconds" checked={showsSeconds} onClick={toggleCheckbox} />
            <label htmlFor="enable-seconds">Show Seconds</label>
        </div>
    )
}

export default ClockSettings