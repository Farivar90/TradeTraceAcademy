import React, { useEffect }  from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import NewsBg from '../../assets/news1.gif';
import NewsBg from '../../assets/news-table.webp';
import NewsW1 from '../../assets/newswoman.png';
import NewsW2 from '../../assets/newswoman2.png';
import './News.css';

gsap.registerPlugin(ScrollTrigger);

const News = () => {
useEffect(() => {
    gsap.from("#forex-m1", {
        scrollTrigger: {
            scrub: true
        },
        y: 100,
    });
    gsap.from("#forex-m2", {
        scrollTrigger: {
            scrub: true
        },
        y: 50,
    });
    gsap.from("#forex-t2", {
        scrollTrigger: {
            scrub: true
        },
        x: -50,
    });
    gsap.from("#forex-t1", {
        scrollTrigger: {
            scrub: true
        },
        x: 50,
    });
    gsap.from("#forex-man", {
        scrollTrigger: {
            scrub: true
        },
        x: -250,
    });
    gsap.from("#forex-plants", {
        scrollTrigger: {
            scrub: true
        },
        x: -50,
    });
    gsap.from("#news-text", {
        scrollTrigger: {
            scrub: true
        },
        x: 600,
    });
}, []);
    return (
        <div className='news-main'>
            <section className="news-parallax">
                <h2 id="news-text">NEWS</h2>
                <img id='news-table' src={NewsBg} alt="news table" />
                <img id='news-woman' src={NewsW1} alt="news woman" />
                <img id='news-woman2' src={NewsW2} alt="news woman2" />
            </section>
                
           
        </div>
    );
};

export default News;
