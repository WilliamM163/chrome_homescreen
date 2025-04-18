function saveFont(font) {
    const json = JSON.stringify(font)
    localStorage.setItem('font', json)
}

function fetchFont() {
    const json = localStorage.getItem('font')
    return JSON.parse(json)
}

export { saveFont, fetchFont }