import { useState, useEffect } from 'react'

import styles from './settings.module.css'

function SelectFonts() {
    const [fonts, setFonts] = useState([])

    const addFontsToList = () => {
        return fonts.map((font, index) => {
            return <option value={index} >{font.fullName}</option>
        })
    }

    const onChange = (event) => {
        const fontIndex = event.target.value
        console.log('fontIndex:', fontIndex, '\nfont:', fonts[fontIndex].family)

    //     We need to add selectedFont to local storage, then update the UI
    }

    useEffect(() => {
        window.queryLocalFonts().then(
            (value) => {
                setFonts(value)
            },
            (error) => {
                console.error(error)
            }
        )
    }, [])

    return (
        <select name="fonts" id="fonts" className={styles.font_picker} onChange={onChange} >
            {addFontsToList()}
        </select>
    )
}

export default SelectFonts