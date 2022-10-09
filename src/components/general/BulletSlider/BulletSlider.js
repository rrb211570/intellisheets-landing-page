import React, { useState } from 'react';
import './BulletSlider.css'

const LEFT = -1;
const RIGHT = 1;
const SLIDE_FROM_LEFT = 'slideFromLeft';
const SLIDE_FROM_RIGHT = 'slideFromRight';

function BulletSlider({ COMPONENT_HEADER, ELEM_ID, numElems, contents, styling, ButtonLeft, ButtonRight, animationLeft, animationRight }) {
    const [visibleElemNum, setVisibleElemNum] = useState(0);

    const bullets = Array.from({ length: numElems }, (v, i) => {
        let customStyling = i == 0 ? { marginLeft: '1vw' } : i == numElems - 1 ? { marginRight: '1vw' } : {};
        let isSelected = (i) => i == 0 ? 'selected' : '';
        return <p key={i} id={COMPONENT_HEADER + 'bullet' + i} className={`bulletIndicator ${isSelected(i)}`} style={customStyling}></p>
    });

    let slideElemLeft = () => {
        if (visibleElemNum == 0) slideInElem(0, numElems - 1, LEFT);
        else slideInElem(visibleElemNum, visibleElemNum - 1, LEFT);
    };

    let slideElemRight = () => {
        if (visibleElemNum == numElems - 1) slideInElem(numElems - 1, 0, RIGHT);
        else slideInElem(visibleElemNum, visibleElemNum + 1, RIGHT);
    };

    let slideInElem = (prevElemNum, newElemNum, direction) => {
        reselectBullet(prevElemNum, newElemNum, COMPONENT_HEADER);
        triggerAnimation('#' + ELEM_ID, direction, animationLeft, animationRight);
        setVisibleElemNum(newElemNum);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', ...styling.slider }}>
            <div style={{ ...styling.buttonLeft }}>
                <ButtonLeft classId={COMPONENT_HEADER + 'sliderButtonLeft'} direction='left' handler={slideElemLeft}></ButtonLeft>
            </div>
            <div style={{ height: '100%', width: '100%' }}>
                <div id={COMPONENT_HEADER + 'slider'} className='center' style={{ height: '90%', width: '100%', position: 'relative' }}>
                    {contents[visibleElemNum]}
                </div>
                <div id={COMPONENT_HEADER + 'sliderBullets'} className='flexRow' style={{ justifyContent: 'center', ...styling.bullets }} >
                    {bullets}
                </div>
            </div>
            <div style={{ ...styling.buttonRight }}>
                <ButtonRight classId={COMPONENT_HEADER + 'sliderButtonRight'} direction='right' handler={slideElemRight}></ButtonRight>
            </div>
        </div>
    );
}

function triggerAnimation(elemID, direction, animationLeft, animationRight) {
    document.querySelector(elemID).classList.remove(animationLeft);
    document.querySelector(elemID).classList.remove(animationRight);
    console.log(elemID)
    window.requestAnimationFrame(function (time) { // re-triggers the animation frame
        window.requestAnimationFrame(function (time) {
            document.querySelector(elemID).classList.add(direction == LEFT ? animationLeft : animationRight);
        });
    });
}

function reselectBullet(prevElemNum, newElemNum, COMPONENT_HEADER) {
    document.querySelector('#' + COMPONENT_HEADER + 'bullet' + prevElemNum).classList.remove('selected');
    document.querySelector('#' + COMPONENT_HEADER + 'bullet' + newElemNum).classList.add('selected');
}

export { BulletSlider, SLIDE_FROM_LEFT, SLIDE_FROM_RIGHT };