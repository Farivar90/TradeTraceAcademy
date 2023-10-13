import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FundamentalAnalysis.css';
import tir from '../../../assets/tir.png';
import s3a from '../../../assets/service-360-after.png';
import s3b from '../../../assets/service-360-before.png';

gsap.registerPlugin(ScrollTrigger);

const FundamentalAnalysis = () => {

    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".analysis-parallax",
            start: "top top", // Trigger as soon as scrolling starts
            onEnter: () => {
                gsap.to("#s3a", { opacity: 1, duration: 0.2 }); // Show s3a
                gsap.to("#s3b", { opacity: 0, duration: 0.2 }); // Hide s3b
            },
            onLeaveBack: () => {
                gsap.to("#s3a", { opacity: 0, duration: 0.2 }); // Hide s3a
                gsap.to("#s3b", { opacity: 1, duration: 0.2 }); // Show s3b
            }
        });
    }, []);
    
    

    return (
        <div className="fundamental-analysis-page">
            <section className="analysis-parallax">
                <img src={s3b} id="s3b" alt="s3b"/>
                <img src={s3a} id="s3a" alt="s3a"/>
                {/* <img src={tir} id="tir" alt="tir"/> */}
               
            </section>
            <section className="analysis-sec">
                <h2>Fundamental Analysis</h2>
                <p>Explanation about fundamental analysis, its importance, and how it impacts the forex market.</p>
                <br />
                <h3>
                    Dive deeper into each aspect of fundamental analysis below.
                </h3>
            </section>
            <div className="fa-container">
                <div className="fa-box" style={{ "--clr": "#f5a623" }}>
                    <div className="fa-content">
                        <div className="fa-icon"><ion-icon name="analytics-outline"></ion-icon></div>
                        <div className="fa-text">
                            <h3>1. Economic Indicators</h3>
                            <p>Explanation about economic indicators and their significance in forex trading.</p>
                            <a href="/Lessons/FundamentalAnalysis/EconomicIndicators">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="fa-box" style={{ "--clr": "#d8f500" }}>
                    <div className="fa-content">
                        <div className="fa-icon"><ion-icon name="flag-outline"></ion-icon></div>
                        <div className="fa-text">
                            <h3>2. Political Events and Their Impact</h3>
                            <p>How political events can influence currency values and forex trading strategies.</p>
                            <a href="/Lessons/FundamentalAnalysis/PoliticalEvents">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="fa-box" style={{ "--clr": "#9eff01" }}>
                    <div className="fa-content">
                        <div className="fa-icon"><ion-icon name="cash-outline"></ion-icon></div>
                        <div className="fa-text">
                            <h3>3. Interest Rates and Central Bank Decisions</h3>
                            <p>Understanding the role of interest rates and central bank decisions in forex trading.</p>
                            <a href="/Lessons/FundamentalAnalysis/InterestRates">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fa-container">
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

export default FundamentalAnalysis;
