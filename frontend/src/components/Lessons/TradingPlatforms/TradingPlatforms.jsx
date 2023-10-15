import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TradingPlatforms.css';
import AnimatedSVG from  '../../Loading/ALoader';

gsap.registerPlugin(ScrollTrigger);

const TradingPlatforms = () => {


    return (
        <div className="introduction-to-forex-page">
            {/* <section className="forex-parallax">
                <h2 id="forex-text">FOREX</h2>
                <img src={m1} id="forex-m1" alt="Mountain 1"/>
                <img src={t2} id="forex-t2" alt="Trees 2"/>
                <img src={m2} id="forex-m2" alt="Mountain 2"/>
                <img src={t1} id="forex-t1" alt="Trees 1"/>
                <img src={man} id="forex-man" alt="Man"/>
                <img src={plants} id="forex-plants" alt="Plants"/>
            </section> */}
            <section className="forex-sec">
                <h2>Under Construction</h2>
               

                
            </section>
            <AnimatedSVG/>

        <div className="itf-container">
            <div className='back-to-int'>
                <a href="/Lessons">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Back to Lessons
                </a>
            </div>
        </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/ScrollTrigger.min.js"></script>
    
        </div>
    );
}

export default TradingPlatforms;
