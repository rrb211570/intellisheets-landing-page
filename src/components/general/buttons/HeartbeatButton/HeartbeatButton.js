import React, { useEffect } from 'react';
import './HeartbeatButton.css'

function HeartbeatButton(props) {
    let { id, textValue, styling, size } = props;

    useEffect(() => {

    }, []);

    return (
        <div id={id} style={styling != null ? styling.positioning : null}>
            <button onClick={navToLink} className={'heartbeatBtn__' + size}>
                <p style={{ margin: '0', fontFamily: 'Century Gothic' }}>{textValue}</p>
            </button>
        </div>
    );
}

function navToLink(){
    
}
export default HeartbeatButton;