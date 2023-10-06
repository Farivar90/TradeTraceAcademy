import React, { useEffect, useRef } from 'react';
import './MainPage.css';
import bg from '../../assets/fed-day.jpg';

function MainPage() {
    const overlayRef = useRef(null);
    const infoRef = useRef(null);


    useEffect(() => {const handleScroll = () => {
      const offset = window.scrollY;
      const opacity = Math.min(offset / 200, 1); // Cap at 1 for 100% opacity
      if (overlayRef.current) {
          overlayRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
      }
      if (infoRef.current) {
          infoRef.current.style.opacity = opacity;
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
                <img src={bg} alt="background picture (fed building)" />
                <div className="bg-overlay" ref={overlayRef}></div>
                <div>
                  <h1 className='info-mainbg' ref={infoRef}>the Marriner S. Eccles Federal Reserve Board Building</h1>
                </div>
            </div>
            <footer className="footer-m">&copy; 2023 F.A Financial Department</footer>
        </div>
    );
}

export default MainPage;