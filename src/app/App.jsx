import Clock from './features/clock/clock'
import Search from './features/search/search'
import Background from './features/background/background'
import Settings from './features/settings/settings'

import OpenSettingsButton from './features/settings/openSettingsButton'
import { useSelector } from 'react-redux'
import Tasks from './features/tasks/tasks'
import Pets from './features/pets/pets'


function App() {
    // Show font
    const fontStyle = useSelector((state) => state.font)

    return (
        <div style={fontStyle}>
            <Background />
            <OpenSettingsButton />
            <Settings />
            <div className='homescreen'>
                <div className='clock_and_search_widget'>
                    <Clock />
                    <Search />
                </div>
                <div className='side_panel'>
                    <Tasks />
                    {/* <Pets /> */}
                </div>
            </div>
        </div>
    )
}

export default App