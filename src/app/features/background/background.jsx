import { useSelector } from 'react-redux'


function Background() {
    const backgroundDataURL = useSelector((state) => state.backgroundDataURL)
    
    if (backgroundDataURL === '') {
        return <></>
    }
    return <img src={backgroundDataURL} className='background_image'/>
}

export default Background