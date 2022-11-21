import React, { useEffect } from 'react';
import Logo from '../../Logo/Logo.js'
import FeatureRoadmap from '../FeatureRoadmap/FeatureRoadmap.js';
import './InitialNav.css'

function InitialNav() {
    useEffect(() => {

    }, []);

    return (
        <div className='initialNav' style={{ height: '100%' }}>
            <div className="flexRow" style={{ height: '100%' }}>
                <div style={{ width: '10.5%', height: 'auto' }}></div>
                <div className="flexRow" style={{ width: '49.2%' }}>
                    <Logo theme='darkMode' />
                </div>
                <div className="flexRow" style={{ width: '25%', height: '100%' }}>
                    <FeatureRoadmap />
                </div>
                <div style={{ width: '11.2%', height: 'auto' }}></div>
            </div>
        </div>

    );
}
export default InitialNav;