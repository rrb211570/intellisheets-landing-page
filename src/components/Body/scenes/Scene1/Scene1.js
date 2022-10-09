import React, { useEffect } from 'react';
import './Scene1.css'

function Scene1() {
    useEffect(() => {

    }, []);

    return (
        <div id='scene1'>
            <div id='scene1__panel'>
                <p id='scene1__mainMessage' className='reveal'>Integrate our editor with your data sources. Or upload files in .csv, .sql, and more.</p>
                <div id='scene1__editor' className='reveal'>Try for yourself</div>
            </div>
            <div id='EDITOR'></div>
        </div>
    );
}
export default Scene1;