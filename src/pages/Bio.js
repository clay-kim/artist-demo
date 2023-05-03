import React from 'react'
import "./Bio.css"
import profile_pic from '../images/demo_profile_pic.jpeg';


function Bio() {
    // Text in Bio profile
    
    return (
        <div className="bio-container">
            <div className = "content">
                <img src={profile_pic} alt="selfie"/>
                    <div className='text'>
                        <h1>About Clay</h1>
                        <h5>Oil Painter</h5>
                        <p>Clay, a Seattle-based artist who grew up in Korea, has a distinctive approach to his art. He draws inspiration from the "beauty of blank space," a crucial element in traditional Korean painting, which involves simplification and omission of elements.
                        <br/><br/>
                        According to Clay, the blank space represents the act of emptying one's greed and ego on the canvas, providing the audience with ample room to intervene. He draws inspiration from people and nature, the things we experience and face daily.
                        <br/><br/>
                        Line, color, and space are the essential components of Clay's paintings, symbolizing his stubbornness, emotions, and background. According to Clay, his paintings are like a seesaw, constantly shifting and changing depending on the subject matter and time. This ordinary yet extraordinary experience speaks to the soul and resonates deeply with the viewer.
                        </p>
                    </div>
            </div>
        </div>

    )
}

export default Bio