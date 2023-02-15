import React, { useEffect } from 'react';
import './URL.css'

function URL(props) {
    let { URL__id, URL__class, url, bullet, text, textAlign } = props;

    useEffect(() => {
        
    }, []);

    return (
        <div id={URL__id != undefined ? URL__id : null} className={URL__class != undefined ? `${URL__class} URL__div` : 'URL__div'} style={textAlign != undefined ? { textAlign: textAlign } : {}}>
            <p className='URL__p'>{bullet} <a className='URL__link' href={url} /*onClick={(e) => e.preventDefault()}*/>{text}</a> </p>
        </div>
    );
}

export default URL;