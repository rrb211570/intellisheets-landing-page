import React, { useEffect } from 'react';
import Logo from '../../Logo/Logo.js'
import FeatureRoadmap from '../FeatureRoadmap/FeatureRoadmap.js';
import './ScrollingNav.css'

function ScrollingNav() {
    useEffect(() => {

    }, []);

    return (
        <div className="flexRowBetween">
            <div className="flexRow" style={{ width: '50%' }}>
                <Logo/>
            </div>
            <div className="flexRow" style={{ width: '50%' }}>
                <div style={{ width: '30%' }}></div>
                <FeatureRoadmap/>
            </div>
        </div>
    );
}
export default ScrollingNav;