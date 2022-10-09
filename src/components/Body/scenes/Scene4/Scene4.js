import React from 'react';
import { BulletSlider, SLIDE_FROM_LEFT, SLIDE_FROM_RIGHT } from '../../../general/BulletSlider/BulletSlider';
import { RoundedArrowButton } from '../../../';
import './Scene4.css'

const COMPONENT_HEADER = 'scene4__';
const ELEM_ID = 'scene4__quote';

let contents = [
    <p id={ELEM_ID} className={'centerContent hidden ' + SLIDE_FROM_RIGHT} style={{ width: '100%' }}>I've thought about this from first principles, and realized that this is what we've needed all along: simple, user-friendly design. - Mark Zuckerburg</p>,
    <p id={ELEM_ID} className={'centerContent hidden ' + SLIDE_FROM_RIGHT} style={{ width: '100%' }}>Intellisheets is so sleek and delightful. It's like that beautiful silence of taking your new iPhone out of your pocket, taking a sip of pure caffeine, and systematically unloading misery onto the internet. - r/cscareersquestions user</p>,
    <p id={ELEM_ID} className={'centerContent hidden ' + SLIDE_FROM_RIGHT} style={{ width: '100%' }}>&#x1F919; &#x1F44C; &#x1F4AF; &#x1F91D; &#x1F91E; &#x1F609; - Elon Musk</p>
];

let styling = {
    slider: { height: '60vh', width: '40vw', backgroundColor: '#cbd5e1', border: '', borderRadius: '35px' },
    bullets: { position: 'absolute', left: '0', right: '0', bottom: '10%' },
    buttonLeft: { display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: '0 0 8% 8%', zIndex: '2' },
    buttonRight: { display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: '0 8% 8% 0', zIndex: '2' },
};

let [animationLeft, animationRight] = [SLIDE_FROM_LEFT, SLIDE_FROM_RIGHT];

function Scene4() {
    return (
        <div id='scene4'>
            <div id='scene4__panel'>
                <div id='scene4__quoteSlider' className='reveal' style={{ width: '40vw' }}>
                    {BulletSlider({ COMPONENT_HEADER: COMPONENT_HEADER, ELEM_ID: ELEM_ID, numElems: 3, contents: contents, styling: styling, ButtonLeft: RoundedArrowButton, ButtonRight: RoundedArrowButton, animationLeft: animationLeft, animationRight: animationRight })}
                </div>
            </div>
            <div id='QUOTES'></div>
        </div >
    );
}

export default Scene4;