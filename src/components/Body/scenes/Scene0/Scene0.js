import React, { useEffect } from 'react';
import Stage0 from './stages/stage0/Stage0';
import Stage1 from './stages/stage1/Stage1';
import Stage2 from './stages/stage2/Stage2';

function Scene0() {
    useEffect(() => {

    }, []);

    return (
        <div id='scene0'>
            <Stage0></Stage0>
            <Stage2></Stage2>
            <Stage1></Stage1>
        </div>
    );
}
export default Scene0;