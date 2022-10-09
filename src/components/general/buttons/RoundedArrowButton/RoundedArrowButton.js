import React, { useState } from 'react';
import './RoundedArrowButton.css'

function RoundedArrowButton(props) {
    let { classId, direction, handler, styling} = props;
    const [angle, setAngle] = useState(direction == 'left' ? -180 : 0);

    return (
        <div id={classId} style={styling}>
            <button className='roundedArrowBtn' onClick={handler}>
                <p style={{ margin: '0px', rotate: `${angle}deg`, fontFamily: 'Century Gothic' }}>&#10140;</p>
            </button>
        </div>
    );
}
export default RoundedArrowButton;