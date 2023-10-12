import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TechnicalAnalysis.css';
// You can import your assets here
// For example:
// import chart from '../../../assets/chart.png';
// import indicators from '../../../assets/indicators.png';

gsap.registerPlugin(ScrollTrigger);

const TechnicalAnalysis = () => {
    useEffect(() => {
        // Add your gsap animations here
        // For example:
        // gsap.from("#chart-types", { ... });
        // gsap.from("#indicators", { ... });
    }, []);

    return (
        <div className="technical-analysis-page">
            <section className="tech-analysis-parallax">
                {/* Add your images and elements here */}
                {/* For example:
                <img src={chart} id="chart-types" alt="Chart Types"/>
                <img src={indicators} id="indicators" alt="Indicators"/>
                */}
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
                <div className="ta-box" style={{ "--clr": "#f39c12" }}>
                    <div className="ta-content">
                        <div className="ta-icon"><ion-icon name="bar-chart-outline"></ion-icon></div>
                        <div className="ta-text">
                            <h3>1. Chart Types</h3>
                            <p>Learn about different chart types like line, bar, and candlestick charts and how they are used in technical analysis.</p>
                            <a href="/Lessons/TechnicalAnalysis/ChartTypes">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="ta-box" style={{ "--clr": "#e74c3c" }}>
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
