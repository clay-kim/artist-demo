import React from 'react'
import './Painting.css'


import img_01 from './images/gc_painting2.jpeg';
import img_02 from './images/gc_painting3.jpeg';
import img_03 from './images/gc_painting4.jpeg';
import img_04 from './images/gc_painting5.jpeg';
import img_05 from './images/gc_painting6.jpeg';
import img_06 from './images/gc_painting7.jpeg';
import img_07 from './images/gc_painting8.jpeg';
import img_08 from './images/gc_painting9.jpg';
import img_09 from './images/gc_painting10.jpg';
import img_10 from './images/gc_painting11.jpeg';
import img_11 from './images/gc_painting12.jpeg';
import img_12 from './images/gc_painting13.jpeg';



function Painting() {


    return (
        <div className="painting-container">
            <div className="content">
                <div className="image_grid">
                    <img src={img_01} className="img-responsive" />
                    <img src={img_02} className="img-responsive" />
                    <img src={img_03} className="img-responsive" />
                    <img src={img_04} className="img-responsive" />
                    <img src={img_05} className="img-responsive" />
                    <img src={img_06} className="img-responsive" />
                    <img src={img_07} className="img-responsive" />
                    <img src={img_08} className="img-responsive" />
                    <img src={img_09} className="img-responsive" />
                    <img src={img_10} className="img-responsive" />
                    <img src={img_11} className="img-responsive" />
                    <img src={img_12} className="img-responsive" />
                    <img src={img_01} className="img-responsive" />
                    <img src={img_02} className="img-responsive" />
                    <img src={img_03} className="img-responsive" />
                </div>
            </div>

        </div>

    )
}

export default Painting