import React from 'react'
import "./Bio.css"
import profile_pic from '../images/demo_profile_pic.jpeg';


function Bio() {
    // Text in Bio profile
    const bioText = 'My name is Clay Kim. As a painter, I am known as GC. GC stands for “God’s Child”. I believe that my talent and inspirations come from God, the greatest artist above all. I am from South Korea and studied art at the University of Washington. As a lifetime student to the subject, I accept the changes and different personalities my art takes on. I am always willing to try different techniques, based on the subject of my art. I believe it is important to accept and become what I paint – to be suitable and at times provocative. My approach to a painting is based on my first impression rather that observation. Painting is another way of keeping my journal. All of my painting represents my perspective, reminiscence, emotions and at times anxiety about my life’s patterns. I enjoy working with color schemes to create or define emotions. I admire how different colors can play off each other and create synergy on the canvas. I often use an impulsive application of paint with combinations of symbolic colors to express subjective emotions.';

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
                    <br/>
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