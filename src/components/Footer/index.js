import React from 'react'

import "./styles.css"
import '../../styles/colors.css';
import '../../styles/styles.css';

import MapPinLineIcon from 'remixicon-react/MapPinLineIcon';
import TelegramFillIcon from 'remixicon-react/TelegramFillIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="icons">
                <MapPinLineIcon color="#553B91" size={28} />
                <TelegramFillIcon color="#553B91" size={28} />
                <InstagramLineIcon color="#553B91" size={28} />
            </div>
        </footer>
    )
}

export default Footer
