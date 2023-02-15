import React from 'react';
import URL from '../general/URL/URL';
import './Footer.css'

function Footer() {
    return (
        <div id='footer' className='footer'>
            <div className='footerLinks'>
                <p>Product</p>
                <URL url='https://google.com' text='Editor' textAlign='left' />
                <URL url='https://google.com' text='Dashboard Builder' textAlign='left' />
                <URL url='https://google.com' text='Query Management Server' textAlign='left' />
                <URL url='https://google.com' text='Data Warehousing' textAlign='left' />
                <URL url='https://google.com' text='A/B Testing Support BETA' textAlign='left' />
                <URL url='https://google.com' text='Enterprise Solutions' textAlign='left' />
                <URL url='https://google.com' text='Integrations' textAlign='left' />
                <p>Company</p>
                <URL url='https://google.com' text='About' textAlign='left' />
                <URL url='https://google.com' text={`Careers [We're hiring]`} textAlign='left' />
                <URL url='https://google.com' text='Terms of Service' textAlign='left' />
                <URL url='https://google.com' text='Privacy Policy' textAlign='left' />
                <URL url='https://google.com' text='Cookie Policy and Settings' textAlign='left' />
                <p>&nbsp;</p>
                <p>Explore</p>
                <URL url='https://google.com' text='Migration Guides' textAlign='left' />
                <URL url='https://google.com' text='Templates' textAlign='left' />
                <URL url='https://google.com' text='Blog' textAlign='left' />
                <URL url='https://google.com' text='Hire an expert' textAlign='left' />
                <p>&nbsp;</p>
                <p>Get Help</p>
                <URL url='https://google.com' text='Support' textAlign='left' />
                <URL url='https://google.com' text='Pricing' textAlign='left' />
                <URL url='https://google.com' text='Forum' textAlign='left' />
            </div>
        </div>
    );
}

export default Footer;