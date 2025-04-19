import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeFont } from './clockSlice';

import styles from './clockSettings.module.css'

const saveFont = (font) => {
    const fontJSON = JSON.stringify(font)
    localStorage.setItem('clock-font', fontJSON)
}


function ChangeClockFont() {
    const dispatch  = useDispatch()

    const [permission, setPermission] = useState(false);
    const [fonts, setFonts] = useState([])

    const addFontsToList = () => {
        return fonts.map((font, index) => {
            return <option value={index} >{font.fullName}</option>
        })
    }

    const onChange = (event) => {
        const fontIndex = event.target.value

    //     Adding Selected Font to localStorage then updating UI
        const font = {
            'fontFamily': fonts[fontIndex].family,
            'fontStyle': fonts[fontIndex].style
        }
        saveFont(font) // Saving font to localStorage
        dispatch(changeFont(font))        
    }

    const getPermission = () => {
        window.queryLocalFonts().then(
            (value) => {
                setFonts(value)
                setPermission(true)
            },
            (error) => {
                console.error(error)
            }
        )
    }

    if (!permission) {
        return <button onClick={getPermission} className={styles.font_picker}>Access Fonts Permission</button>
    }
    return (
        <select name="fonts" id="fonts" className={styles.font_picker} onChange={onChange} >
            {addFontsToList()}
        </select>
    )
}

export default ChangeClockFont