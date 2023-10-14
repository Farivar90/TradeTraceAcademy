import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TechnicalAnalysis.css';
import tabg1 from '../../../assets/tabg1.png';
import gcandle from '../../../assets/tagreencandle.png';
import rcandle from '../../../assets/taredcandle.png';
import sell from '../../../assets/sell-ta.png';

gsap.registerPlugin(ScrollTrigger);

const TechnicalAnalysis = () => {

    useEffect(() => {
 
        gsap.set(["#gc", "#rc", "#sell"], { opacity: 0, y: 50 });
    
        // Animation for gcandle
        gsap.to("#gc", {
            scrollTrigger: {
                trigger: "#gc",
                start: "top 50%",
                end: "bottom 30%",
                scrub: true
            },
            opacity: 1,
            y: 0
        });
    
        // Animation for rcandle
        gsap.to("#rc", {
            scrollTrigger: {
                trigger: "#rc",
                start: "top 20%",
                end: "bottom 20%",
                scrub: true
            },
            opacity: 1,
            y: 0
        });
    
        // Animation for sell
        gsap.to("#sell", {
            scrollTrigger: {
                trigger: "#sell",
                start: "top 60%",
                end: "bottom 50%",
                scrub: true
            },
            opacity: 1,
            y: 0
        });
    }, []);
    

    return (
        <div className="technical-analysis-page">
            <section className="tech-analysis-parallax">
                <img src={tabg1} id="chart-types" alt="tabg1"/>
                <img src={gcandle} id="gc" alt="gcandle"/>
                <img src={rcandle} id="rc" alt="rcandle"/>
                <img src={sell} id="sell" alt="sell"/>
            </section>
            <section className="tech-analysis-sec">
                <h2>Technical Analysis</h2>
                <p>Technical analysis involves predicting future price movements based on past market data. Traders use various tools and techniques, including charts and indicators, to analyze and interpret market data.</p>
                <br />
                <h3>
                    Explore the tools and techniques used in technical analysis below.
                </h3>
            </section>
            <div className="ta-container">
                <div className="ta-box" style={{ "--clr": "#ff0101" }}>
                    <div className="ta-content">
                        <div className="ta-icon"><ion-icon name="bar-chart-outline"></ion-icon></div>
                        <div className="ta-text">
                            <h3>1. Chart Types</h3>
                            <p>Learn about different chart types like line, bar, and candlestick charts and how they are used in technical analysis.</p>
                            <a href="/Lessons/TechnicalAnalysis/ChartTypes">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="ta-box" style={{ "--clr": "#ff6f01" }}>
                    <div className="ta-content">
                        <div className="ta-icon"><ion-icon name="pulse-outline"></ion-icon></div>
                        <div className="ta-text">
                            <h3>2. Indicators</h3>
                            <p>Discover various technical indicators like Moving Averages, MACD, RSI, and more. Understand their significance and application in trading.</p>
                            <a href="/Lessons/TechnicalAnalysis/Indicators">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ta-container">
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

export default TechnicalAnalysis;
