import Clock from './features/clock/clock'
import Search from './features/search/search'
import Background from './features/background/background'
import Settings from './features/settings/settings'

import styles from './App.module.css'
import OpenSettingsButton from './features/settings/openSettingsButton'
import { useSelector } from 'react-redux'
import Tasks from './features/tasks/tasks'


function App() {
    // Show font
    const fontStyle = useSelector((state) => state.font)

    return (
        <div style={fontStyle}>
            <Background />
            <OpenSettingsButton />
            <Settings />
            <div className={styles.grid}>
                <div className={styles.clock_and_search_widget}>
                    <Clock />
                    <Search />
                </div>
                <div className={styles.tasks_widget}>
                    <Tasks />
                </div>
            </div>
        </div>
    )
}

export default App