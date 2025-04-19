import { useSelector } from 'react-redux'
import styles from './tasks.module.css'

function Tasks() {
    const tasks = useSelector((state) => state.tasks)
    // const headerFont = useSelector((state) => state.clock.font)
    console.log(tasks)

    return (
        <>
        <h1>Tasks</h1>
        </>
    )
}

export default Tasks