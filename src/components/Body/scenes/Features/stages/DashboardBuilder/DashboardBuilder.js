import React, { useEffect } from 'react';
import './DashboardBuilder.css'

function DashboardBuilder() {
    useEffect(() => {

    }, []);

    return (
        <div id='dashboardBuilder'>
            <div id='dashboardBuilder__panel'>
                <p id='dashboardBuilder__mainMessage' className='reveal'>Use our dashboard builder to set things up how you like them.</p>
                <div id='dashboardBuilder__img' className='reveal'></div>
            </div>
            <div id='DASHBOARD_BUILDER'></div>
        </div>
    );
}
export default DashboardBuilder;