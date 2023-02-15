import React, { useEffect } from 'react';
import URL from '../../../../../general/URL/URL';
import './DashboardBuilder.css'

function DashboardBuilder() {
    useEffect(() => {

    }, []);

    return (
        <div id='dashboardBuilder'>
            <div id='dashboardBuilder__panel'>
                <div id='dashboardBuilder__msg'>
                    <p id='dashboardBuilder__mainMsg' className='reveal'>Use our dashboard builder to set things up how you like them.</p>
                    <URL URL__id='dashboardBuilder__subMsg' url='https://google.com' bullet='>' text='See templates' />
                </div>
                <div id='dashboardBuilder__img' className='reveal'></div>
            </div>
            <div id='DASHBOARD_BUILDER'></div>
        </div>
    );
}
export default DashboardBuilder;