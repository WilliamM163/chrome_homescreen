function Search() {
    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            const user_input = event.target.value
            const search_query = encodeURIComponent(user_input)
            window.open(`https://www.google.com/search?q=${search_query}`, '_self')
        }
    }

    return <input
        type="text"
        id="search"
        name="search"
        className='search'
        placeholder="Search Google"
        autoComplete="off"
        onKeyDown={onKeyDown}
    ></input>
}

export default Search