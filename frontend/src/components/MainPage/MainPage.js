import React, { useEffect, useRef, useState } from 'react';
import './MainPage.css';
import bg from '../../assets/fed-day.jpg';
import gg from '../../assets/gg.webp';
import lessons from '../../assets/lessons.gif'
import forum from '../../assets/forum.gif'
import news from '../../assets/news.gif'
import LogoSVG from '../Loading/Logo';
import { Link } from 'react-router-dom';
import ecb from '../../assets/ecb.jpg';
import sft from '../../assets/sft.png';
import Cube from '../Cube/Cube';

function MainPage() {
    const overlayRef = useRef(null);
    const infoRef = useRef(null);
    const ecbOverlayRef = useRef(null);
    const ecbInfoRef = useRef(null);
    const sftOverlayRef = useRef(null);
    const sftInfoRef = useRef(null);
    const [showSlogan, setShowSlogan] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowSlogan(prevState => !prevState);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const opacity = Math.min(offset / 500, 1);
            const opacity1 = Math.min(offset / 100, 1);
            if (overlayRef.current) {
                overlayRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            }
            if (infoRef.current) {
                infoRef.current.style.opacity = opacity1;
            }
            if (ecbOverlayRef.current) {
                ecbOverlayRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            }
            if (ecbInfoRef.current) {
                ecbInfoRef.current.style.opacity = opacity1;
            }
            if (sftOverlayRef.current) {
                sftOverlayRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            }
            if (sftInfoRef.current) {
                sftInfoRef.current.style.opacity = opacity1;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className="main-page" role="main" aria-label="Main Content">
            {/* <div className='bg-main'> */}
                {/* <img src={bg} alt="Federal Reserve Building" /> */}
                {/* <div className="bg-overlay" ref={overlayRef}></div> */}
            <div
                className="parallax-image"
                style={{ backgroundImage: `url(${gg})` }}
                alt='Mainbg'
            >
                <div className='i-mainbg'>
                    <h1>Master Forex Trading with Trade Trace Academy.</h1>
                    <h4>Your One-Stop Hub for Forex Education, Discussion, and Up-to-the-Minute News.</h4>
                </div>
            </div>
            <div
                className="parallax-image"
                style={{ backgroundImage: `url(${bg})` }}
                alt='Federal Reserve Building'
            >
                <div className='info-mainbg'>
                    <h1>the Marriner S. Eccles Federal Reserve Board Building</h1>
                </div>
            </div>

            {/* </div> */}
            <div className='main-t1'>
                <h1 className='name-main'>
                    TradeTrace Academy
                    {/* <div className='logo-svg'>
                        < LogoSVG aria-hidden="true"/>
                    </div> */}
                </h1>
                {showSlogan && (
                    <h2 className='slogan-main tracking-in-expand'>
                        A Trace Today, A Trade Tomorrow
                    </h2>
                )}
                {!showSlogan && (
                    <h2 className='slogan-main tracking-out-contract'>
                        A Trace Today, A Trade Tomorrow
                    </h2>
                )}
            <div>
            <div
                className="parallax-image"
                style={{ backgroundImage: `url(${ecb})` }}
                alt='ECB'>
            <div className="bg-overlay" ref={ecbOverlayRef}></div>
                <h1 className='info-mainbg1' ref={ecbInfoRef}>Seat of the European Central Bank</h1>
            </div>

            </div>

            </div>
            <nav className='main-cards-1st' aria-label="Main Navigation">
                <div className="card1">
                    <Link to="/lessons" className="no-underline">
                        <img src={lessons} alt="Lessons icon" />
                        <h3>Lessons</h3>
                        <p>A structured educational hub teaching the essentials of Forex trading, from basics to advanced techniques.</p>
                    </Link>
                </div>
                <div className="card2">
                    <Link to="/News" className="no-underline">
                        <img src={news} alt="News icon" />
                        <h3>News</h3>
                        <p>Real-time updates on Forex market events, providing insights and analysis on currency movements and global impacts.</p>
                    </Link>
                </div>
                <div className="card3">
                    <Link to="/Forum" className="no-underline">
                        <img src={forum} alt="Forum icon" />
                        <h3>Forum</h3>
                        <p>A community space for traders to discuss experiences, seek advice, and share insights on Forex trading strategies.</p>
                    </Link>
                </div>
            </nav>
            <div className='after-c'></div>
            <div
                className="parallax-image"
                style={{ backgroundImage: `url(${sft})` }}
                alt='SFT'>
            <div className="bg-overlay" ref={sftOverlayRef}>
            </div>
                <h1 className='info-mainbg2' ref={sftInfoRef}>Shanghai World Financial Center</h1>
            </div>
                <h1 id='cube-info'> 
                    These are most important FOREX pairs. By click on each you can see their current chart.
                </h1>
            <div className='after-c'>
                <Cube />
            </div>
        </div>
    );
}

export default MainPage;
