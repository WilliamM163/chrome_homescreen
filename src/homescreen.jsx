import Settings from "./components/settings.jsx"
import Clock from "./components/clock.jsx"
import Search from './components/search.jsx'

import styles from "./home.module.css"

function HomeScreen({enableSettings}) {
    return (
        <>
            {enableSettings ? <Settings /> : <></>}
            <div className={styles.home_screen}>
                <Clock />
                <Search />
            </div>
        </>
    )
}

export default HomeScreen;