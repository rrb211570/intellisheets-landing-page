import React from 'react';
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
    'https://d1wuqbabgpq5e8.cloudfront.net/videos/editor.mp4',
    'https://d1wuqbabgpq5e8.cloudfront.net/videos/oc-demo.mkv',
    'https://drive.google.com/file/d/1Oz4atK5KH2mU-G-HgdgX99vXhekwSwOR/preview'
];

function Stage1() {
    return (
        <div id='intro_stage1'>
            <div id='intro_stage1__panel'>
                <div id='intro_stage1__mobileDashboard' className='mobileDashboard mobileDashboardTransition mobileDashboardHidden fix'>
                    <img src={mobileURLs[imageLinkIndex]} id='intro_stage1__mobileDashboardImg' className='hidden slideFromRight' />
                </div>
                <div id='intro_stage1__desktopDashboard' className='desktopDashboard desktopDashboardTransition releaseTop'>
                    <video id='intro_stage1__desktopDashboardVid' className='hidden slideFromBottom' width="640" height="360" controls autoPlay muted playsInline>
                        <source src={tabletURLs[imageLinkIndex]} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div id='EXAMPLE_DASHBOARDS'></div>
        </div>
    );
}

function resetAndPlayVideo(tablet, source) {
    tablet.pause();
    tablet.muted = true;
    tablet.src = source;
    tablet.oncanplay = function () {
        tablet.currentTime = 0;
        tablet.play().catch(function (error) {
            console.error('Unable to autoplay dashboard video:', error);
        });
        tablet.oncanplay = null;
    };
    tablet.load();
}

function resetRevealedVideo() {
    let tablet = document.querySelector('#intro_stage1__desktopDashboardVid');
    resetAndPlayVideo(tablet, tabletURLs[imageLinkIndex]);
}

function updateMobileVisibility(mobile) {
    if (imageLinkIndex === 2) {
        mobile.classList.remove('mobileDashboardHidden');
        mobile.classList.add('reveal');
    } else {
        mobile.classList.add('mobileDashboardHidden');
        mobile.classList.remove('reveal');
    }
}

function revealPrev() {
    if (imageLinkIndex > 0) {
        let tablet = document.querySelector('#intro_stage1__desktopDashboardVid');
        let mobile = document.querySelector('#intro_stage1__mobileDashboardImg');
        imageLinkIndex--;
        updateMobileVisibility(document.querySelector('#intro_stage1__mobileDashboard'));
        tablet.classList.remove('slideFromTop');
        tablet.classList.remove('slideFromBottom');
        mobile.classList.remove('slideFromLeft');
        mobile.classList.remove('slideFromRight');
        window.requestAnimationFrame(function (time) { // re-triggers the animation frame
            window.requestAnimationFrame(function (time) {
                resetAndPlayVideo(tablet, tabletURLs[imageLinkIndex]);
                mobile.src = mobileURLs[imageLinkIndex];
                tablet.classList.add('slideFromTop');
                mobile.classList.add('slideFromLeft');
            });
        });
    }
}

function revealNext() {
    if (imageLinkIndex < 2) {
        let tablet = document.querySelector('#intro_stage1__desktopDashboardVid');
        let mobile = document.querySelector('#intro_stage1__mobileDashboardImg');
        imageLinkIndex++;
        updateMobileVisibility(document.querySelector('#intro_stage1__mobileDashboard'));
        tablet.classList.remove('slideFromTop');
        tablet.classList.remove('slideFromBottom');
        mobile.classList.remove('slideFromLeft');
        mobile.classList.remove('slideFromRight');
        window.requestAnimationFrame(function (time) { // re-triggers the animation frame
            window.requestAnimationFrame(function (time) {
                resetAndPlayVideo(tablet, tabletURLs[imageLinkIndex]);
                mobile.src = mobileURLs[imageLinkIndex];
                tablet.classList.add('slideFromBottom');
                mobile.classList.add('slideFromRight');
            });
        });
    }
}

export { Stage1, revealPrev, revealNext, resetRevealedVideo };