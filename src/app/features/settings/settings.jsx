import { useSelector, useDispatch } from 'react-redux'

import { closeSettings } from './settingsSlice'

import close from './close_icon.svg'
import styles from './settings.module.css'
import ChangeBackground from '../background/changeBackground'
import ChangeFont from '../font/changeFont'


function Settings() {
    const open = useSelector((state) => state.showSettingsPanel)
    const dispatch = useDispatch()

    
    const onClick = () => {
        dispatch(closeSettings())
    }

    // Styling
    const showSettings = {
        left: open ? '0' : '-300px'
    }

    return (
        <div className={styles.settings} style={showSettings}>
            <div className={styles.title_bar}>
                <h1>Settings</h1>
                <img src={close} onClick={onClick} className={styles.close} alt="close button" />
            </div>
            <div className={styles.options}>
                <h2>Background</h2>
                <ChangeBackground />
                <h2>Font Family</h2>
                <ChangeFont />
            </div>
        </div>
    )
}

export default Settings;