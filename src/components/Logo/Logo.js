import React, { useState, useEffect } from 'react';

function Logo(props) {
    let { theme } = props;

    let [fontColor, setFontColor] = useState('black');
    useEffect(() => {
        if (theme == 'darkMode') setFontColor('white');
    }, []);

    return (
        <div className="flexRow" style={{ width: 'calc(58px + 10vmin)', borderBottom: '1px solid white', zIndex: '3' }}>
            <p style={{ margin: '0', padding: '0 0 2px 3px', fontFamily: 'Century Gothic', color: '#0075FF', }}>Data</p>
            <p style={{ margin: '0', padding: '0 0 2px 0', fontFamily: 'Century Gothic', color: '#E0A52B', }}>folio</p>
            <img src='feather6.png' alt='Datafolio logo' style={{ position: 'absolute', marginTop: 'calc(5px + 0.6vmin)', height: 'calc(25px + 3vmin)', marginLeft: 'calc(48px + 8.5vmin)', marginBottom: 'calc(9px - 0.8vmin)' }} />
        </div>
    );
}
export default Logo;
