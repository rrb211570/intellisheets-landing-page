import React, { useEffect } from 'react';
import './Stage1.css'

function Stage1() {
    useEffect(() => {

    }, []);

    return (
        <div id='scene0_stage1'>
            <div id='scene0_stage1__panel'>
            <div id='scene0_stage1__companyBanners'>Substack Logitech Webflow IBM Discord Watershed Nike People.ai Databricks </div>
                <div style={{display: 'grid'}}>
                    <img src='logos/substack.jpg' style={{width: '10%'}} />
                </div>
                <p id='scene0_stage1__mainMessage' className='reveal'>Used by both Fortune 500 and startups alike.</p>
            </div>
            <div id='COMPANY_BANNERS'></div>
        </div>
    );
}
export default Stage1;