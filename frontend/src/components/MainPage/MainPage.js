import React, { useEffect, useRef, useState } from 'react';
import './MainPage.css';
import bg from '../../assets/fed-day.jpg';
import lessons from '../../assets/lessons.gif'
import forum from '../../assets/forum.gif'
import news from '../../assets/news.gif'
import LogoSVG from '../Loading/Logo';
import { Link } from 'react-router-dom';



function MainPage() {
    const overlayRef = useRef(null);
    const infoRef = useRef(null);
    const [showSlogan, setShowSlogan] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowSlogan(prevState => !prevState);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {const handleScroll = () => {
      const offset = window.scrollY;
      const opacity = Math.min(offset / 500, 1); // Cap at 1 for 100% opacity
      const opacity1 = Math.min(offset / 100, 1);
      if (overlayRef.current) {
          overlayRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
      }
      if (infoRef.current) {
          infoRef.current.style.opacity = opacity1;
      }
  };
  

        window.addEventListener('scroll', handleScroll);
        return () => {
            // Cleanup the event listener on component unmount
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="main-page">
            <div className='bg-main'>
                <img src={bg} alt="background picture - fed building" />
                <div className="bg-overlay" ref={overlayRef}></div>
                <div>
                  <h1 className='info-mainbg' ref={infoRef}>the Marriner S. Eccles Federal Reserve Board Building</h1>
                </div>
            </div>
            <div className='main-t1'>
                    <h1 className='name-main'>
                    TradeTrace Academy
                    <div className='logo-svg'>
                        < LogoSVG/>
                    </div>
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
            </div>
            <div className='main-cards-1st'>
                <div class="card1">
                    <Link to="/lessons" className="no-underline">
                        <img src={lessons} alt="Lessons" />
                        <h3>Lessons</h3>
                        <p>A structured educational hub teaching the essentials of Forex trading, from basics to advanced techniques.</p>
                    </Link>
                </div>
                <div class="card2">
                    <Link to="/lessons" className="no-underline">
                        <img src={news} alt="News" />
                        <h3>News</h3>
                        <p>Real-time updates on Forex market events, providing insights and analysis on currency movements and global impacts.</p>
                    </Link>
                </div>
                <div class="card3">
                    <Link to="/lessons" className="no-underline">
                        <img src={forum} alt="Forum" />
                        <h3>Forum</h3>
                        <p>A community space for traders to discuss experiences, seek advice, and share insights on Forex trading strategies.</p>
                    </Link>
                </div>
            </div>
                <div className='after-c'>
                </div>
        </div>
    );
}

export default MainPage;
