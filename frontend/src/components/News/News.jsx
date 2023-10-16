import React, { useEffect }  from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NewsBg from '../../assets/news-table.webp';
import NewsW1 from '../../assets/newswoman.png';
import NewsW2 from '../../assets/newswoman2.png';
import FAlogo from '../../assets/FA-logo-t.png';
import TTlogo from '../../assets/ttlogo.png';
import TTname from '../../assets/ttname.png';
import './News.css';

gsap.registerPlugin(ScrollTrigger);

const News = () => {
useEffect(() => {

    gsap.from("#news-woman", {
        scrollTrigger: {
            scrub: true
        },
        x: -70, 
    });
    gsap.from("#news-woman2", {
        scrollTrigger: {
            scrub: true
        },
        x: 70,
    });
    gsap.from("#TT-name", {
        scrollTrigger: {
            scrub: true
        },
        x: 0, y: -400
    });
    gsap.from("#TT-logo", {
        scrollTrigger: {
            scrub: true
        },
        x: -300, y: -200,
    });
    gsap.from("#FA-logo", {
        scrollTrigger: {
            scrub: true
        },
        x: 300, y: -200,
    });
    gsap.from("#news-text", {
        scrollTrigger: {
            scrub: true
        },
        x: 800,
    });
}, []);
    return (
        <div className='news-main'>
            <section className="news-parallax">
                <h2 id="news-text">NEWS</h2>
                <img id='news-table' src={NewsBg} alt="news table" />
                <img id='news-woman' src={NewsW1} alt="news woman" />
                <img id='news-woman2' src={NewsW2} alt="news woman2" />
                <img id='FA-logo' src={FAlogo} alt="FA logo" />
                <img id='TT-logo' src={TTlogo} alt="TT logo" />
                <img id='TT-name' src={TTname} alt="TT name" />
            </section>
            <section className="news-sec">

            </section>
                
           
        </div>
    );
};

export default News;
