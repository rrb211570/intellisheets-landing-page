import React from 'react';
import { BulletSlider, SLIDE_FROM_LEFT, SLIDE_FROM_RIGHT } from '../../../../general/BulletSlider/BulletSlider';
import { RoundedArrowButton } from '../../../..';
import './Quotes.css'

const COMPONENT_HEADER = 'quotes__';
const ELEM_ID = 'quotes__quote';

let contents = [
    <p id={ELEM_ID} className={'centerContent hidden ' + SLIDE_FROM_RIGHT} style={{ width: '100%' }}>We don't have a huge tech footprint at our company, so before Datafolio I was manually importing and exporting data with Excel. This has saved me so much time. - Senior Accountant</p>,
    <p id={ELEM_ID} className={'centerContent hidden ' + SLIDE_FROM_RIGHT} style={{ width: '100%' }}>We were originally looking for a Figma-equivalent for designing our data pipelines. But having a platform to tweak our algorithms, visualize data, AND connect non-trivially with our backend? Our processes have become far more simple. - Data science researcher</p>,
    <p id={ELEM_ID} className={'centerContent hidden ' + SLIDE_FROM_RIGHT} style={{ width: '100%' }}>We're currently using Datafolio as a data-driven tool for orchestrating our advertising campaigns. So far, I've been digging it. - Sales Engineer</p>
];

let styling = {
    slider: { height: '60vh', width: 'calc(40vw - 4px)', backgroundColor: 'white', border: '', borderRadius: '34px' },
    bullets: { position: 'absolute', left: '0', right: '0', bottom: '10%' },
    buttonLeft: { display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: '0 0 8% 8%', zIndex: '2' },
    buttonRight: { display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: '0 8% 8% 0', zIndex: '2' },
};

let [animationLeft, animationRight] = [SLIDE_FROM_LEFT, SLIDE_FROM_RIGHT];

function Quotes() {
    return (
        <div id='quotes' className='quotes'>
            <div id='quotes__panel' className='reveal' style={{ width: '40vw' }}>
                {BulletSlider({ COMPONENT_HEADER: COMPONENT_HEADER, ELEM_ID: ELEM_ID, numElems: 3, contents: contents, styling: styling, ButtonLeft: RoundedArrowButton, ButtonRight: RoundedArrowButton, animationLeft: animationLeft, animationRight: animationRight })}
            </div>
            <div id='QUOTES'></div>
        </div >
    );
}

export default Quotes;