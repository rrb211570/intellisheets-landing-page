import React, { useEffect } from 'react';
import { Scene0, Scene1, Scene2, Scene3, Scene4, Scene5 } from './scenes'

function Body() {
    useEffect(() => {

    }, []);

    return (
        <div id='body'>
            <Scene0></Scene0>
            <Scene2></Scene2>
            <Scene1></Scene1>
            <Scene3></Scene3>
            <Scene4></Scene4>
            <Scene5></Scene5>
        </div>
    );
}
export default Body;