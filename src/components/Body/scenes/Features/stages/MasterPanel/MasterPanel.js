import React, { useEffect } from 'react';
import URL from '../../../../../general/URL/URL';
import './MasterPanel.css'

function MasterPanel() {
    useEffect(() => {

    }, []);

    return (
        <div id='masterPanel' className='masterPanel'>
            <div id='masterPanel__panel'>
                {/* Sample control panel for email newsletter and social media management */}
                {/* A/B Theme control panel */}
                <div id='masterPanel__msg'>
                    <p id='masterPanel__mainMsg' className='reveal'>Define custom HTTP queries to create control panels for managing your ecosystem.</p>
                    <URL URL__id='masterPanel__subMsg' url='https://google.com' bullet='>' text='Query Management Hub' />
                </div>
                <div id='masterPanel__img' className='reveal'></div>
            </div>
            <div id='MASTER_PANEL'></div>
        </div>
    );
}
export default MasterPanel;