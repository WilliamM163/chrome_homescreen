import { useRef } from 'react'
import styles from './settings.module.css'

import { getImageData, storeImage} from "../db.js";

function ChangeBackground({setBackgroundURL}) {
    const button = useRef(0)

    const onClick = () => {
        button.current.click()
    }

    const changeBackground = async (event) => {
        const file = event.target.files[0]

        // Reading Image Data
        const imageDataURL = await getImageData(file)
        const success = storeImage(imageDataURL)
        if (success) setBackgroundURL(imageDataURL)
    }

    return (
        <>
            <input type="file" accept="image/png, image/jpeg" ref={button} onChange={changeBackground} className={styles.select_file_hidden} />
            <button onClick={onClick} className={styles.select_file_button}>Change Background</button>
        </>
    )
}

export default ChangeBackground