import React, { useState, useEffect } from 'react';

function Logo(props) {
    let {theme} = props;

    let [fontColor, setFontColor] = useState('black');
    useEffect(() => {
        if(theme=='darkMode') setFontColor('white');
    }, []);

    return (
        <div>
            <div className="flexRow" style={{ width: '50%' }}>
                <p style={{ fontFamily: 'Century Gothic', color: fontColor}}>Intellisheets</p>
                <img src='tulip.png' alt='tulip logo' style={{ width: '30px' }} />
            </div>
        </div>
    );
}
export default Logo;