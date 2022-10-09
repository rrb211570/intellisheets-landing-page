import React, { useEffect } from 'react';
import './Scene2.css'

function Scene2() {
    useEffect(() => {

    }, []);

    return (
        <div id='scene2'>
            <div id='scene2__panel'>
                <div id='scene2__builder' className='reveal'></div>
                <p id='scene2__mainMessage' className='reveal'>Use our dashboard builder to set things up how you like them.</p>
            </div>
            <div id='DASHBOARD_BUILDER'></div>
        </div>
    );
}
export default Scene2;