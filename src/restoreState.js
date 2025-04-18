// Fetching functions
import { fetchFont } from './app/features/font/changeFontFunctions'
import { fetchImage } from './app/features/background/changeBackgroundFunctions'

// Redux action functions
import { setFont } from './app/features/font/fontSlice'
import { setBackground } from './app/features/background/backgroundSlice'

function restoreState(dispatch) {
    const font = fetchFont()
    const backgroundDataURL = fetchImage()

    dispatch(setFont(font))
    dispatch(setBackground(backgroundDataURL))
}

export { restoreState }