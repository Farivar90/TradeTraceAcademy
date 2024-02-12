import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Profile.css';
import AnimatedSVG from  '../Loading/ALoader';

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {


    return (
        <div className="introduction-to-forex-page">
            <div className="itf-container">
                <h1>Forex</h1>
                <h4>Under Construction</h4>
            </div>
            <section className="forex-sec">
                <h2>Under Construction</h2>
               

                
            </section>
            <AnimatedSVG/>

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
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/ScrollTrigger.min.js"></script>
    
        </div>
    );
}

export default Profile;
