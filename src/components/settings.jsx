import { useNavigate, useLocation } from "react-router";

import close from '../assets/close.svg'
import styles from './settings.module.css'
import ChangeBackground from "./change_background.jsx";
import SelectFonts from "./select_fonts.jsx";

function Settings({setFont, setBackgroundURL}) {
    const navigate = useNavigate()
    const location = useLocation()

    const onClose = () => {
        navigate('/')
    }

    const showSettings = {
        left: location.pathname === '/settings' ? '0' : '-300px'
    }

    return (
        <div className={styles.settings} style={showSettings}>
            <div className={styles.title_bar}>
                <h1>Settings</h1>
                <img src={close} onClick={onClose} alt="close button" />
            </div>
            <div className={styles.options}>
                <p>Background</p>
                <ChangeBackground setBackgroundURL={setBackgroundURL} />
                <p>Font Family</p>
                <SelectFonts setFont={setFont} />
                {/*<p>Transparency</p>*/}
                {/*<input type="range" id="transparency" name="transparency" min="0" max="100"/>*/}

                {/*<div>*/}
                {/*    <input type="checkbox" id="search_box" name="search_box" checked />*/}
                {/*    <label htmlFor="search_box">Enable Search</label>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Settings;