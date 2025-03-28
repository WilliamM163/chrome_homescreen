import styles from './settings.module.css'

function Settings() {
    return (
        <div className={styles.settings}>
            <h1>Settings</h1>
            <input type="file" id="background" name="background" accept="image/png image/jpeg" />
            <select name="fonts" id="fonts">
                <option value="ubuntu">Ubuntu</option>
            </select>
            <label htmlFor="fonts"> Font Family</label>
            <br />
            <input type="range" id="transparency" name="transparency" min="0" max="100"/>
            <label htmlFor="transparency">Transparency</label>
            <br />
            <input type="checkbox" id="search_box" name="search_box" checked />
            <label htmlFor="search_box">Enable Search</label>
            <br />
        </div>
    )
}

export default Settings;