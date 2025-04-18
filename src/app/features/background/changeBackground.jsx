import { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { getImageData, storeImage } from './changeBackgroundFunctions.js'
import { setBackground } from './backgroundSlice.js'

import styles from './changeBackground.module.css'


function ChangeBackground() {
    const dispatch = useDispatch()
    const button = useRef(0)

    const onClick = () => {
        button.current.click()
    }

    const changeBackground = async (event) => {
        const file = event.target.files[0]

        // Reading Image Data
        const imageDataURL = await getImageData(file)
        const success = storeImage(imageDataURL)
        if (success) dispatch(setBackground(imageDataURL))
    }

    return (
        <>
            <input type="file" accept="image/png, image/jpeg" ref={button} onChange={changeBackground} className={styles.select_file_hidden} />
            <button onClick={onClick} className={styles.select_file_button}>Change Background</button>
        </>
    )
}

export default ChangeBackground