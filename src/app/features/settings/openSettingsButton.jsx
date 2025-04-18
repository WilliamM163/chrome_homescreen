import { useDispatch } from 'react-redux'

import { openSettings } from './settingsSlice'

import styles from './settings.module.css'
import icon from './settings_icon.svg'


function OpenSettingsButton() {
    const dispatch  = useDispatch()
    
    const onClick = () => {
        dispatch(openSettings())
    }

    return (
        <img src={icon} className={styles.settings_button} onClick={onClick}/>
    )
}

export default OpenSettingsButton