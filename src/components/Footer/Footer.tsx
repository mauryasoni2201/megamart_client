import React from 'react';
import './Footer.css';
;
const Footer:React.FC = () => {
    return (
    <footer>
        <div className='container'>
            <div className='footer-content'>
                <div className='footer-text'>
                <p style={{color:'white'}} className='fallback-text'>© 2024 MegaMart | MS. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
