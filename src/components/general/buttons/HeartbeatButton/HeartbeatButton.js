import React, { useEffect } from 'react';
import './HeartbeatButton.css'

function HeartbeatButton(props) {
    let {textValue} = props;

    useEffect(() => {

    }, []);

    return (
        <div>
            <button className='heartbeatBtn'>
                <em style={{ fontFamily: 'Century Gothic' }}>{textValue}</em>
            </button>
        </div>
    );
}
export default HeartbeatButton;