import React, { useEffect, useState } from 'react';
import './CompanyBanners.css'

let logoNames = [
    ['SanDisk', 'Oracle', 'Norwegian Airlines', 'AirBnB', 'Rivian', 'Gusto', '', '', '', '', '', '', '', '', ''],
    ['', 'Caviar', 'Rescale', 'Goldbelly', 'HackerRank', 'Atomwise', 'Matterport', '', '', '', '', '', '', '', ''],
    ['', '', 'Clover', 'Zoom', 'Segment', 'Adobe', 'Brex', 'Good Eggs', '', '', '', '', '', '', ''],
    ['', '', '', 'Substack', 'Logitech', 'Webflow', 'IBM', 'Discord', 'Fjallraven', '', '', '', '', '', ''],
    ['', '', '', '', 'Sony', 'Microsoft', 'Kellogg\'s', 'Razor', 'Nikon', 'Hive.ai', '', '', '', '', ''],
    ['', '', '', '', '', 'Cloudflare.ai', 'Flexport', 'Instacart', 'Oxo', 'New York Times', 'Jasön', '', '', '', ''],
    ['', '', '', '', '', '', 'Paper Source', 'Vitamix', 'Chefs Warehouse', 'Kirkland', 'Crunchyroll', 'Nvidia', '', '', ''],
    ['', '', '', '', '', '', '', 'Olay', 'H&M', 'Wüsthof', 'Duracell', 'Riot Games', 'Lush', '', ''],
    ['', '', '', '', '', '', '', '', 'Twitch', 'Lever', 'Thatgamecompany', 'Nike', 'Spotify', 'Faire', ''],
    ['', '', '', '', '', '', '', '', '', 'Medium', 'Waymo', 'Lime', 'Superdry', 'Taysha GTx', 'DoorDash']
]

function Banners() {
    const [logosBanner, setLogosBanner] = useState(null);

    useEffect(() => {
        buildLogosBanner(logoNames);
    }, []);

    let buildLogosBanner = (logoNames) => {
        let logoRows = [];
        let bufferLen = 6;
        for (let i = 0; i < logoNames.length; ++i) {
            let logoRow = [];
            for (let j = 0; j < logoNames[i].length; ++j) {
                let styleObj = i <= j && j < bufferLen ? {
                    animation: 'slide 35s infinite',
                    animationTimingFunction: 'linear',
                    // To simulate even horizontal spacing, imagine that diagonal Items are spawning,
                    // one after the other (via animationDelay) beyond left side of window.
                    // Since infinite animation connects beginning and end, 
                    // divide total animation time by #rowItems, for seamless wraparound
                    animationDelay: `${- (j * (35.0 / 6.0))}s`
                } : {};
                logoRow.push(<p className={`companyBanners__logo`} key={i + '-' + j} style={styleObj}>{logoNames[i][j]}</p>);
            }
            bufferLen++;
            logoRows.push(<div key={i} style={{}}>{logoRow}</div>);
        }
        setLogosBanner(logoRows);
    };

    return (
        <div id='companyBanners__bg'>
            {logosBanner}
        </div>
    );
}

function CompanyBanners() {
    useEffect(() => {

    }, []);

    return (
        <div id='companyBanners'>
            <div id='companyBanners__panel'>
                <Banners />
                <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <p id='companyBanners__mainMessage' className='companyBanners hidden'>Used by both Fortune 500 and startups alike.</p>
                </div>
            </div>
            <div id='COMPANY_BANNERS'></div>
            <div style={{ position: 'absolute', height: '200px', width: '100vw', bottom: '-300vh', left: '0px' }}>
                <div className='companyBanners__bottomBorder1'></div>
                <div className='companyBanners__bottomBorder2'></div>
            </div>
        </div>
    );
}
export default CompanyBanners;