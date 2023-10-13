import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FundamentalAnalysis.css';
// You can import your assets here
// For example:
// import e1 from '../../../assets/e1.png';
// import p1 from '../../../assets/p1.png';
// import i1 from '../../../assets/i1.png';

gsap.registerPlugin(ScrollTrigger);

const FundamentalAnalysis = () => {
    useEffect(() => {
        // Add your gsap animations here
        // For example:
        // gsap.from("#economic-indicator", { ... });
        // gsap.from("#political-events", { ... });
        // gsap.from("#interest-rates", { ... });
    }, []);

    return (
        <div className="fundamental-analysis-page">
            <section className="analysis-parallax">
                {/* Add your images and elements here */}
                {/* For example:
                <img src={e1} id="economic-indicator" alt="Economic Indicator"/>
                <img src={p1} id="political-events" alt="Political Events"/>
                <img src={i1} id="interest-rates" alt="Interest Rates"/>
                */}
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
