import styles from '../home.module.css'

function Search() {
    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            const search_query = event.target.value
            window.location.replace(`https://www.google.com/search?q=${search_query}`)
        }
    }

    return <input
        type="text"
        id="search"
        name="search"
        className={styles.search}
        placeholder="Seach Google"
        onKeyDown={onKeyDown}
    ></input>
}

export default Search