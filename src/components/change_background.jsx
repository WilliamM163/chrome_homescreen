import { useRef } from 'react'
import styles from './settings.module.css'

function ChangeBackground() {
    const button = useRef(0)

    const onClick = () => {
        button.current.click()
    }

    return (
        <div className={styles.upload_background_wrapper}>
            <input type="file" accept="image/png image/jpeg" ref={button} />
            <span onClick={onClick}>Change Background</span>
        </div>
    )
}

export default ChangeBackground