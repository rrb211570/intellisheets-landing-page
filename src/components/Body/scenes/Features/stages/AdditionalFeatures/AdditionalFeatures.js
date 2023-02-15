import React, { useEffect } from 'react';
import './AdditionalFeatures.css'

function AdditionalFeatures() {
    useEffect(() => {

    }, []);

    return (
        <div id='additionalFeatures'>
            <div id='additionalFeatures__panel'>
                <div id='additionalFeatures__mainMessage' className='reveal'>
                    <p>Data Warehousing</p>
                </div>
                <div id='additionalFeatures__mainMessage' className='reveal'>
                    <p>Enterprise</p>
                </div>
                <div id='additionalFeatures__mainMessage' className='reveal'>
                    <p>Integrations</p>
                </div>
            </div>
            <div id='ADDITIONAL_FEATURES'></div>
        </div>
    );
}
export default AdditionalFeatures;