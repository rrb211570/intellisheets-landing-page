import React, { useEffect, useState } from 'react';
import './css/Stage1.css';
import './css/slide.css';
import './css/mobileDashboard.css';
import './css/desktopDashboard.css';

let imageLinkIndex = 0;
let mobileURLs = [
    'dashboards/hundredMobile.png',
    'dashboards/seismicMobile.png',
    'dashboards/kpiMobile.png'
];
let tabletURLs = [
    'dashboards/hundredTablet.png',
    'dashboards/seismicTablet.png',
    'dashboards/kpiTablet.png'
];

function Stage1() {
    useEffect(() => {
        document.querySelector('#intro_stage1__mobileDashboard').classList.add('reveal');
    }, []);

    return (
        <div id='intro_stage1'>
            <div id='intro_stage1__panel'>
                <div id='intro_stage1__mobileDashboard' className='mobileDashboard mobileDashboardTransition fix'>
                    <img src={mobileURLs[imageLinkIndex]} id='intro_stage1__mobileDashboardImg' className='hidden slideFromRight' />
                </div>
                <div id='intro_stage1__desktopDashboard' className='desktopDashboard desktopDashboardTransition releaseTop'>
                    <img src={tabletURLs[imageLinkIndex]} id='intro_stage1__desktopDashboardImg' className='hidden slideFromBottom'></img>
                </div>
            </div>
            <div id='EXAMPLE_DASHBOARDS'></div>
        </div>
    );
}

function revealPrev() {
    if (imageLinkIndex > 0) {
        imageLinkIndex--;
        let tablet = document.querySelector('#intro_stage1__desktopDashboardImg');
        let mobile = document.querySelector('#intro_stage1__mobileDashboardImg');
        tablet.classList.remove('slideFromTop');
        tablet.classList.remove('slideFromBottom');
        mobile.classList.remove('slideFromLeft');
        mobile.classList.remove('slideFromRight');
        window.requestAnimationFrame(function (time) { // re-triggers the animation frame
            window.requestAnimationFrame(function (time) {
                mobile.src = mobileURLs[imageLinkIndex];
                tablet.src = tabletURLs[imageLinkIndex];
                mobile.classList.add('slideFromLeft');
                tablet.classList.add('slideFromTop');
            });
        });
    }
}

function revealNext() {
    if (imageLinkIndex < 2) {
        imageLinkIndex++;
        let tablet = document.querySelector('#intro_stage1__desktopDashboardImg');
        let mobile = document.querySelector('#intro_stage1__mobileDashboardImg');
        tablet.classList.remove('slideFromTop');
        tablet.classList.remove('slideFromBottom');
        mobile.classList.remove('slideFromLeft');
        mobile.classList.remove('slideFromRight');
        window.requestAnimationFrame(function (time) { // re-triggers the animation frame
            window.requestAnimationFrame(function (time) {
                tablet.src = tabletURLs[imageLinkIndex];
                mobile.src = mobileURLs[imageLinkIndex];
                mobile.classList.add('slideFromRight');
                tablet.classList.add('slideFromBottom');
            });
        });
    }
}

export { Stage1, revealPrev, revealNext };