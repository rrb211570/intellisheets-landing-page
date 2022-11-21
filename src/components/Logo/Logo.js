import React, { useState, useEffect } from 'react';

function Logo(props) {
    let { theme } = props;

    let [fontColor, setFontColor] = useState('black');
    useEffect(() => {
        if (theme == 'darkMode') setFontColor('white');
    }, []);

    return (
        <div className="flexRow" style={{ width: 'calc(58px + 10vmin)', borderBottom: '1px solid #faa728', zIndex: '3'}}>
            <p style={{ margin: '0', padding: '0 0 2px 3px', fontFamily: 'Century Gothic', color: fontColor, }}>Datafolio</p>
            <img src='flame_flower.png' alt='Datafolio logo' style={{ position: 'absolute', width: 'calc(25px + 2vmin)', marginLeft: 'calc(48px + 9vmin)', marginBottom: 'calc(9px - 0.8vmin)' }} />
        </div>
    );
}
export default Logo;