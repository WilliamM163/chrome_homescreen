import { useSelector, useDispatch } from 'react-redux'

import { closeSettings } from './settingsSlice'

import close from './close_icon.svg'
import ChangeBackground from '../background/changeBackground'
import ChangeFont from '../font/changeFont'
import ClockSettings from '../clock/clockSettings'


function Settings() {
    const open = useSelector((state) => state.showSettingsPanel)
    const dispatch = useDispatch()

    
    const onClick = () => {
        dispatch(closeSettings())
    }

    // Styling
    const showSettings = {
        left: open ? '0' : '-300px'
    }

    return (
        <div className='settings' style={showSettings}>
            <div className='title_bar'>
                <h1>Settings</h1>
                <img src={close} onClick={onClick} className='close' alt="close button" />
            </div>
            <div className='options'>
                <h2>Background</h2>
                <ChangeBackground />
                <h2>Font Family</h2>
                <ChangeFont />
                <h2>Clock Settings</h2>
                <ClockSettings />
            </div>
        </div>
    )
}

export default Settings;