import React, { useEffect } from 'react';
import HeartbeatButton from '../../../../general/buttons/HeartbeatButton/HeartbeatButton';
import './SignUp.css'

function SignUp() {
    useEffect(() => {

    }, []);

    return (
        <div id='signUp'>
            <div id='signUp__panel' className='signUp__panel hidden'>
                <p id='signUp__msg'>Here's three months on us:</p>
                <HeartbeatButton id='signUp__btn' textValue='Try for free' styling={{ positioning: { marginTop: '10%' } }} size='large'/>
            </div>
            <div id='SIGNUP'></div>
        </div>
    );
}
export default SignUp;