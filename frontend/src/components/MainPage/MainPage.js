import React, { useEffect, useRef } from 'react';
import './MainPage.css';
import bg from '../../assets/fed-day.jpg';

function MainPage() {
    const overlayRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const opacity = Math.min(offset / 200, 3);
            if (overlayRef.current) {
                overlayRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
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
                <div className="bg-overlay" ref={overlayRef}></div> {/* Add this overlay div */}
            </div>
            <footer className="footer-m">&copy; 2023 F.A Financial Department</footer>
        </div>
    );
}

export default MainPage;
