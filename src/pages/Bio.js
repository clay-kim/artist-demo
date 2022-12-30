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
                        <p>Clay is a Seattle based artist, who spent his childhood in Korea. 
                        After he got fascinated by “the beauty of blank space” which is the most important element of Korean traditional painting, his works are oriented in the beauty of simplified and omitted elements.
                        <br/><br/>
                        He defines the blank space as the act of emptying the greed and ego on the canvas. This omitted and empty space gives the audience more room to intervene.
                        <br/>
                        The most of his inspiration mainly comes from the things we experience and face such as people and nature.
                        <br/><br/>
                        As with most paintings, the essential elements of his paintings are line, color, and space.
                        Those, often, represent artist’s stubbornness, emotions, and background.
                        Clay defines his paintings as a seesaw. They go down, go up, and sometimes stop for you depending on the time and subject matter.
                        This ordinary and trivial but such a special experience resonates something in your soul.
                        </p>
                    </div>
            </div>
        </div>

    )
}

export default Bio