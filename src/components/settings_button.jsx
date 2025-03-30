import { useNavigate } from "react-router"

import icon from '../assets/settings.svg'
import styles from '../home.module.css'

function SettingsButton() {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/settings')
    }

    return (
        <img src={icon} className={styles.settings_button} onClick={onClick}/>
    )
}

export default SettingsButton