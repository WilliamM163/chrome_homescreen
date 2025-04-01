import { useState, useEffect } from 'react'

import Settings from "./components/settings.jsx"
import Clock from "./components/clock.jsx"
import Search from './components/search.jsx'

import styles from "./home.module.css"
import SettingsButton from "./components/settings_button.jsx";
import {fetchImage} from "./db.js";

function HomeScreen() {
    const [font, setFont] = useState(null)
    const [backgroundURL, setBackgroundURL] = useState(null);

    // Runs on first render
    useEffect(() => {
        // Setting font
        const fontJSON = localStorage.getItem('font')
        const font = JSON.parse(fontJSON)
        if (font) {
            setFont(font)
        }

        // Setting background
        const backgroundDataURL = fetchImage()
        if (backgroundDataURL) setBackgroundURL(backgroundDataURL)
    }, [])

    // Apply Styling
    const applyStyling = () => {
        let style = {'fontFamily': 'monospace'}
        style = {...style, ...font}
        return style
    }

    return (
        <div style={applyStyling()}>
            <SettingsButton />
            {backgroundURL ? <img src={backgroundURL} className={styles.background_image}/> : <></>}
            <Settings setFont={setFont} setBackgroundURL={setBackgroundURL} />
            <div className={styles.home_screen}>
                <Clock />
                <Search />
            </div>
        </div>
    )
}

export default HomeScreen;