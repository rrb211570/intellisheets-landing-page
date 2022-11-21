import React, { useEffect } from 'react';
import { Intro, CompanyBanners, Features, Ending } from './scenes'

let jk = 1;

function Body() {
    useEffect(() => {

    }, []);

    return (
        <div id='body'>
            <Intro />
            <CompanyBanners />
            <Features />
            {Ending(jk, jk, jk)}
        </div>
    );
}
export default Body;