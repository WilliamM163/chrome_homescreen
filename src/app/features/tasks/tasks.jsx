import { useSelector } from 'react-redux'
import styles from './tasks.module.css'

function Tasks() {
    const tasks = useSelector((state) => state.tasks)
    // const headerFont = useSelector((state) => state.clock.font)
    console.log(tasks)

    return (
        <div className={styles.tasks}>
            <h1>Tasks</h1>
        </div>
    )
}

export default Tasks