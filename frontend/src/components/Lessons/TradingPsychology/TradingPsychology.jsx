import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TradingPsychology.css';
// You can import your assets here
// For example:
// import riskManagement from '../../../assets/riskManagement.png';
// import emotionalManagement from '../../../assets/emotionalManagement.png';

gsap.registerPlugin(ScrollTrigger);

const TradingPsychology = () => {
    useEffect(() => {
        // Add your gsap animations here
        // For example:
        // gsap.from("#risk-management", { ... });
        // gsap.from("#emotional-management", { ... });
    }, []);

    return (
        <div className="trading-psychology-page">
            <section className="psychology-parallax">
                {/* Add your images and elements here */}
                {/* For example:
                <img src={riskManagement} id="risk-management" alt="Risk Management"/>
                <img src={emotionalManagement} id="emotional-management" alt="Emotional Management"/>
                */}
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
                <div className="tp-box" style={{ "--clr": "#3498db" }}>
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
