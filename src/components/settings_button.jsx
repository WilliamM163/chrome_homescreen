import icon from '../assets/settings.svg'
import styles from '../home.module.css'

function SettingsButton({setOpenSettings}) {
    const onClick = () => {
        setOpenSettings(true)
    }

    return (
        <img src={icon} className={styles.settings_button} onClick={onClick}/>
    )
}

export default SettingsButton