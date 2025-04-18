import Clock from './features/clock/clock'
import Search from './features/search/search'
import Background from './features/background/background'
import Settings from './features/settings/settings'

import styles from './App.module.css'
import OpenSettingsButton from './features/settings/openSettingsButton'
import { useSelector } from 'react-redux'


function App() {
    // Show font
    const fontStyle = useSelector((state) => state.font)

    return (
        <div style={fontStyle}>
            <Background />
            <OpenSettingsButton />
            <div className={styles.clock_and_search_widget}>
                <Clock />
                <Search />
            </div>
            <Settings />
        </div>
    )
}

export default App