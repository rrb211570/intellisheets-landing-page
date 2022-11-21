import React, { useEffect } from 'react';
import HeartbeatButton from '../../general/buttons/HeartbeatButton/HeartbeatButton.js';
import './FeatureRoadmap.css'

function FeatureRoadmap() {
    useEffect(() => {

    }, []);

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <div className='trapezoidBanner'></div>
            <div id='featureRoadmap' className="flexRowAround" style={{ width: '100%' }}>
                <div style={{ paddingLeft: '15%' }}>
                    <HeartbeatButton textValue='Alpha 2022' size='normal' />
                </div>
                <div style={{ paddingRight: '15%' }}>
                    <HeartbeatButton textValue='Beta 2023' size='normal' />
                </div>
            </div>
        </div>
    );
}
export default FeatureRoadmap;