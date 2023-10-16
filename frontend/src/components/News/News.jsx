import React, { useEffect }  from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NewsBg from '../../assets/news-table.webp';
import NewsW1 from '../../assets/news-w1.png';
import NewsW2 from '../../assets/news-w.png';
import FAlogo from '../../assets/FA-logo-t1.png';
import TTlogo from '../../assets/ttlogo1.png';
import TTname from '../../assets/ttname1.png';
import TTnews from '../../assets/news-t1.png';
import './News.css';

gsap.registerPlugin(ScrollTrigger);

const News = () => {
useEffect(() => {

    const screenWidth = window.innerWidth;

    gsap.from("#news-woman", {
        scrollTrigger: {
            scrub: true
        },
        x: -(screenWidth * 0.05),
    });
    gsap.from("#news-woman2", {
        scrollTrigger: {
            scrub: true
        },
        x: screenWidth * 0.05,
    });
    gsap.from("#TT-name", {
        scrollTrigger: {
            scrub: true
        },
        x: 0, y: -(screenWidth * 0.35)
    });
    gsap.from("#TT-logo", {
        scrollTrigger: {
            scrub: true
        },
        x: -(screenWidth * 0.5), y: -(screenWidth * 0.5),
    });
    gsap.from("#FA-logo", {
        scrollTrigger: {
            scrub: true
        },
        x: (screenWidth * 0.5), y: -(screenWidth * 0.5),
    });
    gsap.from("#news-text", {
        scrollTrigger: {
            scrub: true
        },
        x: (screenWidth * 0.6),
    });
}, []);
    return (
        <div >
        <div className='news-main'>
            <p><br /></p>
            <p><br /></p>
            <p><br /></p>
            <section className="news-parallax">
                <img id='news-text' src={TTnews} alt="TT news" />
                <img id='news-table' src={NewsBg} alt="news table" />
                <img id='news-woman' src={NewsW1} alt="news woman" />
                <img id='news-woman2' src={NewsW2} alt="news woman2" />
                <img id='FA-logo' src={FAlogo} alt="FA logo" />
                <img id='TT-logo' src={TTlogo} alt="TT logo" />
                <img id='TT-name' src={TTname} alt="TT name" />
            </section>
        </div>
            {/* <section className="news-sec">
                <h3>I don't have enough budget to purchase the paid plan for the news API, so the data is not up-to-date!</h3>
            </section> */}
        </div>
                
           
    );
};

export default News;
