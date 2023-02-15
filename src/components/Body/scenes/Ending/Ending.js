import React, { useEffect } from 'react';
import Quotes from './Quotes/Quotes';
import SignUp from './SignUp/SignUp';
import './Ending.css';
import './css/clouds.css';
import './css/boat.scss';
import './css/waves.css';

function Ending() {
    useEffect(() => {

    }, []);

    return (
        <div id='ending'>
            <div id='cloudsDiv' className='cloudsDiv'>
                <div className="cloud large cloud-1">
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className="cloud normal cloud-2">
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className="cloud small cloud-3">
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className="cloud tiny cloud-4">
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className="cloud large cloud-5">
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className="cloud normal cloud-6">
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className="cloud small cloud-7">
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className="cloud tiny cloud-8">
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className="cloud small cloud-9">
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className="cloud normal cloud-10">
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className="cloud tiny cloud-11">
                    <div></div><div></div><div></div><div></div>
                </div>
                <div className="cloud small cloud-12">
                    <div></div><div></div><div></div><div></div>
                </div>
            </div>
            <div id='boat' className='box-drift'>
                <div className='box-bob'>
                    <div className='box-pitch'>
                        <div className='left-sail'></div>
                        <div className='right-sail'></div>
                        <div className='hull'></div>
                    </div>
                </div>
            </div>
            <Quotes />
            <SignUp />
            <svg id='ending__waves' className="ending__waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 14 150 40" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="-3" fill="#fff" />
                    <use xlinkHref="#gentle-wave" x="48" y="-5" fill="rgba(76, 29, 149, 0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="-7" fill="rgba(76, 29, 149, 0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="-9" fill="rgba(76, 29, 149, 0.7)" />
                </g>
            </svg>
            <div style={{ position: 'absolute', height: '5vh', backgroundColor: 'rgba(76, 29, 149, 0.9)' }}></div>
        </div>
    );
}
export default Ending;