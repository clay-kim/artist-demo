import React from 'react';
import './Footer.css';
import { SocialMediaIconsReact } from 'social-media-icons-react';


export default function Footer() {
    return (
        <div className="footer-container">

            <div className='icons'>
                <div className='social-icons-container'>
                    <ul className='social-icons'>
                        <li>
                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(73,112,138,0.5)" iconSize="9" roundness="27%" url="https://www.instagram.com/claythepainter/" size="28" padding="2px" />
                        </li>

                        <li>
                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(73,112,138,0.5)" iconSize="9" roundness="27%" url="https://www.linkedin.com/in/claythedreamer/" size="28" padding="2px" />
                        </li>

                        <li>
                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(73,112,138,0.5)" iconSize="9" roundness="27%" url="clay1013@gmail.com" size="28" border="10p" />
                        </li>
                    </ul>

                </div>
            </div>

            <div className='copyright' style={{ color: "#ccc", backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                © 2022 Copyright:
                <a className='text-dark' href='https://thisisclay.com/'>
                    ThiswillBeMySite.com
                </a>
            </div>

        </div>
    );
}