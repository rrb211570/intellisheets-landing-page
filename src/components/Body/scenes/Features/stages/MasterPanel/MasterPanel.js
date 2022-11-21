import React, { useEffect } from 'react';
import './MasterPanel.css'

function MasterPanel() {
    useEffect(() => {

    }, []);

    return (
        <div id='masterPanel' className='masterPanel'>
            <div id='masterPanel__panel'>
                {/* Sample control panel for email newsletter and social media management */}
                {/* A/B Theme control panel */}
                <p id='masterPanel__mainMessage' className='reveal'>Define custom HTTP queries to create control panels for managing your ecosystem.</p>
                <div id='masterPanel__img' className='reveal'></div>
            </div>
            <div id='MASTER_PANEL'></div>
        </div>
    );
}
export default MasterPanel;