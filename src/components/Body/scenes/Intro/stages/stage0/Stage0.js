import React, { useEffect } from 'react';
import { HeartbeatButton } from '../../../../..';
import './Stage0.css'

function Stage0() {
    useEffect(() => {
        document.querySelector('#intro_stage0__mainMessage').classList.remove('active');
        let blah = setTimeout(() => {
            document.querySelector('#intro_stage0__mainMessage').classList.remove('showSlowly');
            document.querySelector('#intro_stage0__mainMessage').classList.add('hide');
        }, 1000);
    }, []);

    return (
        <div id='intro_stage0'>
            <div id='intro_stage0__panel'>
                <div className='flexRow' style={{ marginTop: '8%' }}>
                    <div style={{ width: '65%' }}>
                        <p id='intro_stage0__mainMessage' className='showSlowly active'>Data dashboards, customized
                            <br /> for
                            <span id='intro_stage0__your'> your</span> needs
                        </p>
                        <HeartbeatButton textValue='Get started' styling={{ positioning: { marginTop: '10%' } }} size='large'></HeartbeatButton>
                    </div>
                </div>
                <div>

                </div>

            </div>
            <div id='INITIAL_SCENE'></div>
        </div>
    );
}
export default Stage0;