import React, { useEffect } from 'react';
import HeartbeatButton from '../../general/buttons/HeartbeatButton/HeartbeatButton.js';
import './FeatureRoadmap.css'

function FeatureRoadmap() {
    useEffect(() => {

    }, []);

    return (
        <div style={{height: '100%', width: '100%' }}>
            <div className='trapezoidBanner'></div>
            <div id='featureRoadmap' className="flexRowRight" style={{ width: '100%' }}>
                <p style={{ paddingRight: '5%', margin: '0px' }}>Feature Roadmap:</p>
                <div style={{ paddingRight: '2%' }}>
                    <HeartbeatButton textValue='Alpha 2022' />
                </div>
                <HeartbeatButton textValue='Beta 2023' />
            </div>

        </div>
    );
}
export default FeatureRoadmap;