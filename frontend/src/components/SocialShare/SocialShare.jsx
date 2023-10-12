import React from 'react';
import './SocialShare.css';

const SocialShare = () => {
    const toggleMenu = () => {
        const menu = document.querySelector(".social-share");
        menu.classList.toggle("active");
    };

    return (
        <div className="social-share">
            <div className="toggle" onClick={toggleMenu}>
                <ion-icon name="share-social"></ion-icon>
            </div>
            <li style={{ '--i': 0, '--clr': '#1877f2' }}>
                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
            </li>
            <li style={{ '--i': 1, '--clr': '#25d366' }}>
                <a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
            </li>
            <li style={{ '--i': 2, '--clr': '#1da1f2' }}>
                <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
            </li>
            <li style={{ '--i': 3, '--clr': '#FF5733' }}>
                <a href="#"><ion-icon name="logo-reddit"></ion-icon></a>
            </li>
            <li style={{ '--i': 4, '--clr': '#0a66c2' }}>
                <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
            </li>
            <li style={{ '--i': 5, '--clr': '#c32aa3' }}>
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
            </li>
            <li style={{ '--i': 6, '--clr': '#1b1e21' }}>
                <a href="#"><ion-icon name="logo-github"></ion-icon></a>
            </li>
            <li style={{ '--i': 7, '--clr': '#0a66c2' }}>
                <a href="#"><ion-icon name="paper-plane"></ion-icon></a>
            </li>
        </div>
    );
};

export default SocialShare;
