import React, { useEffect } from 'react';
import { HeartbeatButton } from '../../../../..';
import MobileSlider from '../../../../../general/MobileSlider/MobileSlider';
import { SLIDE_FROM_RIGHT } from '../../../../../general/BulletSlider/BulletSlider';
import './Stage0.css'

const ELEM_ID = 'scene0_stage0__mobileImg';
let contents = [
    <img id={ELEM_ID} src={'tulip.png'} className={'centerContent hidden ' + SLIDE_FROM_RIGHT} style={{ width: '100%' }} />,
    <p id={ELEM_ID} className={'centerContent hidden ' + SLIDE_FROM_RIGHT} style={{ width: '100%' }}>blah</p>,
    <img id={ELEM_ID} src={'logos/substack.jpg'} className={'centerContent hidden ' + SLIDE_FROM_RIGHT} style={{ width: '100%' }} />,
    <p id={ELEM_ID} className={'centerContent hidden ' + SLIDE_FROM_RIGHT} style={{ width: '100%' }}>what</p>,
    <div id={ELEM_ID} className={'centerContent hidden ' + SLIDE_FROM_RIGHT} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <button>er</button>
        <button>hi</button>
    </div>
];

function Stage0() {
    useEffect(() => {
        document.querySelector('#scene0_stage0__mainMessage').classList.remove('active');
        document.querySelector('#scene0_stage0__mobileSlider').classList.remove('active');
        let blah = setTimeout(() => {
            document.querySelector('#scene0_stage0__mainMessage').classList.remove('showSlowly');
            document.querySelector('#scene0_stage0__mainMessage').classList.add('hide');
        }, 1000);
    }, []);

    return (
        <div id='scene0_stage0'>
            <div id='scene0_stage0__panel'>
                <div className='flexRow' style={{ marginTop: '8%' }}>
                    <div style={{ width: '65%' }}>
                        <p id='scene0_stage0__mainMessage' className='showSlowly active'>Data dashboards, customized
                            <br /> for
                            <span id='scene0_stage0__your'> your</span> needs</p>
                    </div>
                    <div style={{ marginLeft: '8%' }}>
                        <MobileSlider id='scene0_stage0__' classNames='showMobileSlowly active' contents={contents}></MobileSlider>
                    </div>
                </div>
                <HeartbeatButton textValue='Get started'></HeartbeatButton>
            </div>
            <div id='INITIAL_SCENE'></div>
        </div>
    );
}
export default Stage0;