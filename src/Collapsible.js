import React, { useState } from "react";
import './Collapsible.css';
import share from './icons/share.svg';
import whatsapp from './icons/whatsapp.svg';
import twitter from './icons/twitter.svg';
import facebook from './icons/facebook.svg';
import gmail from './icons/gmail.svg';
import linkedin from './icons/linkedin.svg';
import remove from './icons/remove.svg';
import {
    EmailShareButton,
    FacebookShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    TwitterShareButton
} from "react-share";


const config = [
    { option: 'linkedin', icon: linkedin },
    { option: 'twitter', icon: twitter },
    { option: 'facebook', icon: facebook },
    { option: 'gmail', icon: gmail },
]

const URL = window.location.href;

const getShareOption = (config) => {
    switch (config.option) {
        case 'linkedin':
            return <LinkedinShareButton key={config.icon} url={URL}> <img src={config.icon} className="toggle" alt="logo" /> </LinkedinShareButton>
        case 'twitter':
            return <TwitterShareButton key={config.icon} url={URL}> <img src={config.icon} className="toggle" alt="logo" /> </TwitterShareButton>
        case 'facebook':
            return <FacebookShareButton key={config.icon} url={URL}> <img src={config.icon} className="toggle" alt="logo" /> </FacebookShareButton>
        case 'gmail':
            return <EmailShareButton key={config.icon} url={URL}><img src={config.icon} className="toggle" alt="logo" /></EmailShareButton>
        case 'whatsapp':
            return <WhatsappShareButton  key={config.icon} url={URL}><img src={config.icon} className="toggle" alt="logo" /></WhatsappShareButton >
        default:
            console.log(`please give a valid option`);
    }
}

function Collapsible() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="collapsible">
            <div class={!isOpen ? 'container' : 'container ModalOpen'}>
                {getShareOption( { option: 'whatsapp', icon: whatsapp })}
                {isOpen &&
                    config.map(data => {
                        console.log('test', getShareOption(data))
                        return getShareOption(data)
                    })}
                <img src={!isOpen ? share : remove} className="toggle" alt="logo" onClick={() => setIsOpen(!isOpen)} />
            </div>
        </div>
    )
}


export default Collapsible;