import { useSelector } from 'react-redux'

import styles from './background.module.css'

function Background() {
    const backgroundDataURL = useSelector((state) => state.backgroundDataURL)
    
    if (backgroundDataURL === '') {
        return <></>
    }
    return <img src={backgroundDataURL} className={styles.background_image}/>
}

export default Background