import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './IntroductionToForex.css';
import m1 from '../../assets/m1.png';
import m2 from '../../assets/m2.png';
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import man from "../../assets/man.png";
import plants from "../../assets/plants.png";

gsap.registerPlugin(ScrollTrigger);

const IntroductionToForex = () => {
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
        gsap.from("#forex-text", {
            scrollTrigger: {
                scrub: true
            },
            x: 600,
        });
    }, []);
    return (
        <div className="introduction-to-forex-page">
            <section className="forex-parallax">
                <h2 id="forex-text">FOREX</h2>
                <img src={m1} id="forex-m1" alt="Mountain 1"/>
                <img src={t2} id="forex-t2" alt="Trees 2"/>
                <img src={m2} id="forex-m2" alt="Mountain 2"/>
                <img src={t1} id="forex-t1" alt="Trees 1"/>
                <img src={man} id="forex-man" alt="Man"/>
                <img src={plants} id="forex-plants" alt="Plants"/>
            </section>
            <section className="forex-sec">
                <h2>Introduction to Forex</h2>
                <p>Forex (FX) is a portmanteau of the words foreign [currency] and exchange. Foreign exchange is the process of changing one currency into another for various reasons, usually for commerce, trading, or tourism. According to a 2022 triennial report from the Bank for International Settlements (a global bank for national central banks), the daily global volume for forex trading reached $7.5 trillion in 2022.</p>
                <br />
                <br />
                <h3>
                    Read on to learn about the forex markets, what they're used for, and how to start trading.
                </h3>
            </section>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/ScrollTrigger.min.js"></script>
    
        </div>
    );
}

export default IntroductionToForex;
