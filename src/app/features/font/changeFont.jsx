import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setFont } from './fontSlice';

import styles from './changeFont.module.css'


function ChangeFont() {
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
        dispatch(setFont(font))        
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

export default ChangeFont