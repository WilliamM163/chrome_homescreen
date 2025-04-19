// Fetching functions
import { fetchFont } from './app/features/font/changeFontFunctions'
import { fetchImage } from './app/features/background/changeBackgroundFunctions'

// Redux action functions
import { setFont } from './app/features/font/fontSlice'
import { changeFont } from './app/features/clock/clockSlice'
import { setBackground } from './app/features/background/backgroundSlice'

function restoreState(dispatch) {
    const font = fetchFont()
    const clockFont = JSON.parse(localStorage.getItem('clock-font'))
    const backgroundDataURL = fetchImage()

    dispatch(setFont(font))
    dispatch(changeFont(clockFont))
    dispatch(setBackground(backgroundDataURL))
}

export { restoreState }