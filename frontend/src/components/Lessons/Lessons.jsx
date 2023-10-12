import React, { useEffect, useRef } from 'react';
import './Lessons.css';
import waterImg from '../../assets/water.png';
import rocksImg from '../../assets/rocks.png';
import forestImg from '../../assets/forest.png';
import bird1Img from '../../assets/bird1.png';
import bird2Img from '../../assets/bird2.png';

const Lessons = () => {
    const textRef = useRef(null);
    const bird1Ref = useRef(null);
    const bird2Ref = useRef(null);
    const rocksRef = useRef(null);
    const forestRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            let value = window.scrollY;
            textRef.current.style.top = 50 + value * -.1 + '%';
            bird2Ref.current.style.top = value * -1.5 + 'px';
            bird2Ref.current.style.left = value * 2 + 'px';
            bird1Ref.current.style.top = value * -1.5 + 'px';
            bird1Ref.current.style.left = value * -5 + 'px';
            rocksRef.current.style.top = value * -.12 + 'px';
            forestRef.current.style.top = value * .25 + 'px';
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='lessons'>
            <section className='l-sec'>
                <h2 ref={textRef} id='text'>
                    <span>It's time for a new</span>
                    Adventure
                </h2>
        
                <img src={bird1Img} alt="Bird 1" id="bird1" ref={bird1Ref}/>
                <img src={bird2Img} alt="Bird 2" id="bird2" ref={bird2Ref}/>
                <img src={forestImg} alt="Forest" id="forest" ref={forestRef}/>
                <img src={rocksImg} alt="Rocks" id="rocks" ref={rocksRef}/>
                <img src={waterImg} alt="Water" id="water"/>
            </section>
    
            <div className="sec-l">
                <h2>Lessons</h2>
                <h3>🌍 Welcome to Your Forex Trading Journey! 🌍</h3>
                <p>
                    Embarking on the path of Forex trading? You're in the right place! Our carefully curated lessons are designed to provide you with a comprehensive understanding of the world of foreign exchange. From the basics of what Forex is, to the intricacies of technical analysis and trading psychology, we've got you covered.
                </p>
                <h4>
                    📚 What's Inside:
                </h4>
                <p>
                    1. Introduction to Forex Trading: Begin with the essentials and set a strong foundation.<br />
                    2. Fundamental Analysis: Decode the impact of economic indicators and political events.<br />
                    3. Technical Analysis: Master the art of reading charts and using indicators.<br />
                    4. Trading Psychology: Understand the mindset of successful traders.<br />
                    5. Trading Platforms: Explore the tools of the trade.
                </p>
                <h5>
                    📈 Dive in, and let's start this exciting journey together! Happy learning and trading!
                </h5>
            </div>
            <div className='lessons-menu'>
                <ul className='lessons-menu-ul'>
                    <li style={{'--clr': '#48ff00'}}><a href="/Lessons/IntroductionToForex" data-text=" . Introduction to Forex"> . Introduction to Forex</a></li>
                    <li style={{'--clr': '#00de9b'}}><a href="/Lessons/FundamentalAnalysis" data-text=" . Fundamental Analysis"> . Fundamental Analysis</a></li>
                    <li style={{'--clr': '#00ffd5'}}><a href="/Lessons/TechnicalAnalysis" data-text=" . Technical Analysis"> . Technical Analysis</a></li>
                    <li style={{'--clr': '#009dff'}}><a href="/Lessons/TradingPsychology" data-text=" . Trading Psychology"> . Trading Psychology</a></li>
                    <li style={{'--clr': '#002bff'}}><a href="/Lessons/TradingPlatforms" data-text=" . Trading Platforms"> . Trading Platforms</a></li>
                </ul>

            </div>

            <div className="itf-container">
                <div className='back-to-int'>
                    <a href="/">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Back to Main Page
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Lessons;
