import React, { useEffect } from 'react';
import Logo from '../../Logo/Logo.js'
import FeatureRoadmap from '../FeatureRoadmap/FeatureRoadmap.js';
import './InitialNav.css'

function InitialNav() {
    useEffect(() => {

    }, []);

    return (
        <div className='initialNav' style={{ height: '100%' }}>
            <div className="flexRowBetween" style={{ height: '100%' }}>
                <div style={{ width: '10%', height: 'auto' }}></div>
                <div className="flexRow" style={{ width: '50%' }}>
                    <Logo theme='darkMode' />
                </div>
                <div className="flexRow" style={{ width: '30%', height: '100%' }}>
                    <FeatureRoadmap />
                </div>
                <div style={{ width: '10%', height: 'auto' }}></div>
            </div>
        </div>

    );
}
export default InitialNav;