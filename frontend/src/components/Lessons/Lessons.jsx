import React, { useEffect } from 'react';
import './Lessons.css';
import water from '../../assets/water.png';
import rocks from '../../assets/rocks.png';
import forest from '../../assets/forest.png';
import bird1 from '../../assets/bird1.png';
import bird2 from '../../assets/bird2.png';


const Lessons = () => {

    useEffect(() => {
        let text = document.getElementById('text');
        let bird1 = document.getElementById('bird1');
        let bird2 = document.getElementById('bird2');
        let rocks = document.getElementById('rocks');
        let forest = document.getElementById('forest');


        const handleScroll = () => {
            let value = window.scrollY;
            text.style.top = 50 + value * -.1 + '%';
            bird2.style.top = value * -1.5 + 'px';
            bird2.style.left = value * 2 + 'px';
            bird1.style.top = value * -1.5 + 'px';
            bird1.style.left = value * -5 + 'px';
            rocks.style.top = value * -.12 + 'px';
            forest.style.top = value * .25 + 'px';
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='lessons'>
            <section className='l-sec'>
                <h2 id="text">
                    <span>It's time for a new</span>
                            Adventure
                </h2>
        
                <img src={bird1} id="bird1"/>
                <img src={bird2} id="bird2"/>
                <img src={forest} id="forest"/>
                <img src={rocks} id="rocks"/>
                <img src={water} id="water"/>
         </section>
    
            <div className="sec-l">
             <h2>
                Lessons
             </h2>
            <h3>
            🌍 Welcome to Your Forex Trading Journey! 🌍
            </h3>
            <p>
            Embarking on the path of Forex trading? You're in the right place! Our carefully curated lessons are designed to provide you with a comprehensive understanding of the world of foreign exchange. From the basics of what Forex is, to the intricacies of technical analysis and trading psychology, we've got you covered.
            </p>
            <br /><br />
            <p>
                📚 What's Inside:
                <br /><br />
            </p>
            <p>
            1. Introduction to Forex Trading: Begin with the essentials and set a strong foundation.
            <br /><br />
            2.Fundamental Analysis: Decode the impact of economic indicators and political events.
            <br /><br />
            3.Technical Analysis: Master the art of reading charts and using indicators.
            <br /><br />
            4.Trading Psychology: Understand the mindset of successful traders.
            <br /><br />
            5.Trading Platforms: Explore the tools of the trade.
            </p>
            <br /><br />
            <h5>
                <br />📈
                Dive in, and let's start this exciting journey together! Happy learning and trading! 
                <br />
            </h5>
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
