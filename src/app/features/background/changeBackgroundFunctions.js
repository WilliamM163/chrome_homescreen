function readAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(file)
    })
}

async function getImageData(file) {
    try {
        return await readAsDataURL(file)
    } catch (error) {
        console.error("Error reading file:", error)
        throw error
    }
}

export { getImageData }