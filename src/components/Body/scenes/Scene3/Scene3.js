import React, { useEffect } from 'react';
import './Scene3.css'

function Scene3() {
    useEffect(() => {

    }, []);

    return (
        <div id='scene3'>
            <div id='scene3__panel'>
                {/* Sample control panel for email newsletter and social media management */}
                {/* A/B Theme control panel */}
                <p id='scene3__mainMessage' className='reveal'>Define custom HTTP queries to create control panels for managing your ecosystem.</p>
                <div id='scene3__controlPanel' className='reveal'></div>
            </div>
            <div id='MASTER_PANEL'></div>
        </div>
    );
}
export default Scene3;