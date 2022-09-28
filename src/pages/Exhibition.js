import React from 'react'
import './Exhibition.css';
import poster1 from '../images/kaaw-contest.jpeg';
import nostalgia_poster from '../images/nostalgia-poster.jpg';
import kaaw from '../images/rice-planting.jpg'

function Exhibition() {

  
  return (
    <div className="exhibition-container">
      <div className="content">
        <div className="first-content">
          <div className='img'>
              <img src={poster1} alt="kaaw" width="300px" height="299px"/>
              <img className='image-hover' src={kaaw} alt="nostalgia" width="300px" height="300px" />
          </div>

          <div className='first-text'>
            <h2>Art Contest</h2>
            <h5>2021</h5>
            <p>The Korean American Artists Association of Washington State is holding the ‘2021 KAAW Art Contest’.<br />
              The contest was sponsored by the Seattle Consulate General.<br />
              The theme of the contest was ‘A story of Korea from your heart’.

            </p>
          </div>
        </div>

        <div className='second-content'>
          <div className='img2'>
            <img src={nostalgia_poster} alt="selfie" width="300px" />

            
          </div>
            <div className='second-text'>
              <h2>Group Exhibition: Nostalgia </h2>
              <h5>2019</h5>
              <p>Private exhibition hosted by 4 artists.<br />
                Each artist exhibited their work under one theme, Nostalgia.<br />
              </p>
            </div>
        </div>


      </div>
    </div>
  )
}

export default Exhibition