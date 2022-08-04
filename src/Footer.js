import React from 'react';
import './Footer.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';


export default function Footer() {
    return (
        <div className="footer-container">
        
            <div className='copyright' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a className='text-dark' href='https://thisisclay.com/'>
                    ThiswillBeMySite.com
                </a>
            </div>
            
            <div className='icons'>
                <h3>
                    Social Medias
                </h3>

                <div className='social-icons-container'>
                <SocialMediaIconsReact borderColor="rgba(35,35,35,0.25)" borderWidth="2" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(52,69,78,1)" iconSize="9" roundness="27%" url="clay1013@gmail.com" size="28" />
                <SocialMediaIconsReact borderColor="rgba(35,35,35,0.25)" borderWidth="2" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(52,69,78,1)" iconSize="9" roundness="27%" url="clay1013@gmail.com" size="28" />
                <SocialMediaIconsReact borderColor="rgba(35,35,35,0.25)" borderWidth="2" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(52,69,78,1)" iconSize="9" roundness="27%" url="clay1013@gmail.com" size="28" />
                </div>

            </div>

        </div>   
    );
}