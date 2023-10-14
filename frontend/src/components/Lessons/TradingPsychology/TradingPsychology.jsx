import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TradingPsychology.css';
import mountains_behind from '../../../assets/mountains_behind.png';
import mountains_front from '../../../assets/mountains_front.png';
import stars from '../../../assets/stars.png';
import moon from '../../../assets/moon.png';

gsap.registerPlugin(ScrollTrigger);

const TradingPsychology = () => {
    useEffect(() => {
        const starsEl = document.getElementById('stars');
        const moonEl = document.getElementById('moon');
        const mountainsBehindEl = document.getElementById('mountains_behind');
        const textEl = document.getElementById('text-p');
        const mountainsFrontEl = document.getElementById('mountains_front');
    
        const handleScroll = () => {
            let value = window.scrollY;
            if (starsEl) starsEl.style.left = value * 0.25 + 'px';
            if (moonEl) moonEl.style.top = value * 1.05 + 'px';
            if (mountainsBehindEl) mountainsBehindEl.style.top = value * 0.5 + 'px';
            if (mountainsFrontEl) mountainsFrontEl.style.top = value * 0 + 'px';
            if (textEl) {
                textEl.style.marginRight = value * 4 + 'px';
                textEl.style.marginTop = value * 1.5 + 'px';
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className="trading-psychology-page">
            <section className="psychology-parallax">
                <h2 id="text-p">Emotional Management</h2>
                <img src={stars} id="stars" alt="Stars"/>
                <img src={moon} id="moon" alt="Moon"/>
                <img src={mountains_behind} id="mountains_behind" alt="Mountains Behind"/>
                <img src={mountains_front} id="mountains_front" alt="Mountains Front"/>
            </section>
            <section className="psychology-sec">
                <h2>Trading Psychology</h2>
                <p>Trading psychology refers to the emotions and mental state that help to dictate success or failure in trading securities. It involves understanding and managing one's emotions when trading and making decisions based on logic and analysis rather than bias or fear.</p>
                <br />
                <h3>
                    Delve into the key aspects of trading psychology below.
                </h3>
            </section>
            <div className="tp-container">
                <div className="tp-box" style={{ "--clr": "#9b59b6" }}>
                    <div className="tp-content">
                        <div className="tp-icon"><ion-icon name="shield-checkmark-outline"></ion-icon></div>
                        <div className="tp-text">
                            <h3>1. Risk Management</h3>
                            <p>Understand the importance of risk management in trading. Learn strategies to minimize potential losses and protect profits.</p>
                            <a href="/Lessons/TradingPsychology/RiskManagement">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="tp-box" style={{ "--clr": "#0105ff" }}>
                    <div className="tp-content">
                        <div className="tp-icon"><ion-icon name="heart-outline"></ion-icon></div>
                        <div className="tp-text">
                            <h3>2. Emotional Management</h3>
                            <p>Discover techniques to manage emotions effectively while trading. Avoid impulsive decisions and stay focused on your trading plan.</p>
                            <a href="/Lessons/TradingPsychology/EmotionalManagement">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-container">
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

export default TradingPsychology;
