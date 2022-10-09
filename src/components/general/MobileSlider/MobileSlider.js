import React, { useEffect } from 'react';
import { RoundedArrowButton } from '../../';
import { BulletSlider, SLIDE_FROM_LEFT, SLIDE_FROM_RIGHT } from '../BulletSlider/BulletSlider';
import './MobileSlider.css'

let styling = {
    slider: { height: '65vh', width: '15vw', padding: '7% 0 0 0', backgroundColor: '#cbd5e1', border: '', borderRadius: '30px' },
    bullets: { position: 'absolute', left: '0', right: '0' },
    buttonLeft: { display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: '0 0 8% 8%', zIndex: '2' },
    buttonRight: { display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: '0 8% 8% 0', zIndex: '2' },
};

let [animationLeft, animationRight] = [SLIDE_FROM_LEFT, SLIDE_FROM_RIGHT];

function MobileSlider(props) {
    const { id, classNames, contents } = props;

    useEffect(() => {

    }, []);

    return (
        <div id={id + 'mobileSlider'} className={classNames + ' mobileSlider'}>
            {BulletSlider({ COMPONENT_HEADER: id, ELEM_ID: id + 'mobileImg', numElems: contents.length, contents: contents, styling: styling, ButtonLeft: RoundedArrowButton, ButtonRight: RoundedArrowButton, animationLeft: animationLeft, animationRight: animationRight })}
        </div>
    );
}
export default MobileSlider;