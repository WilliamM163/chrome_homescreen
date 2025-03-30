import { useRef } from 'react'
import styles from './settings.module.css'

function ChangeBackground() {
    const button = useRef(0)

    const onClick = () => {
        button.current.click()
    }

    return (
        <>
            <input type="file" accept="image/png image/jpeg" ref={button} className={styles.select_file_hidden} />
            <button onClick={onClick} className={styles.select_file_button}>Change Background</button>
        </>
    )
}

export default ChangeBackground