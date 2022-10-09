import React, { useEffect } from 'react';
import { RoundedArrowButton } from '../../';
import './MobileDashboard.css'

function MobileDashboard(props) {
    const {id, classNames} = props;
    useEffect(() => {

    }, []);

    return (
        <div id={id} className={classNames+' mobileDashboard'}>
            <div>Content</div>
            <div className='flexRow'>
                <div style={{ width: '1.5vw' }}></div>
                <RoundedArrowButton direction='left'></RoundedArrowButton>
                <p id='mobileDashboard__mobileBullet1' className='bulletIndicator selected'></p>
                <p id='mobileDashboard__mobileBullet2' className='bulletIndicator'></p>
                <p id='mobileDashboard__mobileBullet3' className='bulletIndicator'></p>
                <p id='mobileDashboard__mobileBullet4' className='bulletIndicator'></p>
                <RoundedArrowButton direction='right'></RoundedArrowButton>
                <div style={{ width: '1vw' }}></div>
            </div>
        </div>
    );
}
export default MobileDashboard;