// Fetching functions
import { fetchFont } from './app/features/font/changeFontFunctions'
import { fetchImage } from './app/features/background/changeBackgroundFunctions'

// Redux action functions
import { setFont } from './app/features/font/fontSlice'
import { changeFont } from './app/features/clock/clockSlice'
import { setBackground } from './app/features/background/backgroundSlice'
import { fetchTasks } from './app/features/tasks/tasksFunctions'
import { loadTasks } from './app/features/tasks/tasksSlice'

function restoreState(dispatch) {
    const font = fetchFont()
    const clockFont = JSON.parse(localStorage.getItem('clock-font'))
    const backgroundDataURL = fetchImage()
    const tasks = fetchTasks()
    console.log(tasks)

    dispatch(setFont(font))
    dispatch(changeFont(clockFont))
    dispatch(setBackground(backgroundDataURL))
    dispatch(loadTasks(tasks))
}

export { restoreState }