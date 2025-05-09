import { useDispatch } from 'react-redux'

import { openSettings } from './settingsSlice'

import icon from './settings_icon.svg'


function OpenSettingsButton() {
    const dispatch  = useDispatch()
    
    const onClick = () => {
        dispatch(openSettings())
    }

    return (
        <img src={icon} className='settings_button' onClick={onClick}/>
    )
}

export default OpenSettingsButton