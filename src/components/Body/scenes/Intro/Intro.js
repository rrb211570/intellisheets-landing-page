import React, { useEffect } from 'react';
import Stage0 from './stages/stage0/Stage0';
import { Stage1 } from './stages/stage1/Stage1';
import './Intro.css'

function Intro() {
    useEffect(() => {

    }, []);

    return (
        <div id='intro'>
            <div id='intro__muteLayer'>
                <Stage0></Stage0>
                <Stage1></Stage1>
            </div>
        </div>
    );
}
export default Intro;