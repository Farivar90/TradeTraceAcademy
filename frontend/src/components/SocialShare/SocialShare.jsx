import React from 'react';
import './SocialShare.css';

const SocialShare = () => {
    const toggleMenu = () => {
        const menu = document.querySelector(".social-share");
        menu.classList.toggle("active");
    };

    const currentPageUrl = encodeURIComponent(window.location.href);
    const emailSubject = encodeURIComponent("Check this out!");
    const emailBody = encodeURIComponent("I thought you might find this interesting: " + window.location.href);

    return (
        <div className="social-share">
            <div className="toggle" onClick={toggleMenu}>
                <ion-icon name="share-social"></ion-icon>
            </div>
            <li style={{ '--i': 0, '--clr': '#1877f2' }}>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentPageUrl}`}><ion-icon name="Facebook"></ion-icon></a>
            </li>
            <li style={{ '--i': 1, '--clr': '#25d366' }}>
                <a href={`https://wa.me/?text=${currentPageUrl}`}><ion-icon name="Whatsapp"></ion-icon></a>
            </li>
            <li style={{ '--i': 2, '--clr': '#1da1f2' }}>
                <a href={`https://twitter.com/intent/tweet?url=${currentPageUrl}&text=Check this out!`}><ion-icon name="Twitter"></ion-icon></a>
            </li>
            <li style={{ '--i': 3, '--clr': '#FF5733' }}>
                <a href={`https://www.reddit.com/submit?url=${currentPageUrl}&title=Interesting%20Page`}><ion-icon name="Reddit"></ion-icon></a>
            </li>
            <li style={{ '--i': 4, '--clr': '#0a66c2' }}>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentPageUrl}`}><ion-icon name="Linkedin"></ion-icon></a>
            </li>
            <li style={{ '--i': 7, '--clr': '#0a66c2' }}>
                <a href={`mailto:?subject=${emailSubject}&body=${emailBody}`}><ion-icon name="Email"></ion-icon></a>
            </li>
        </div>
    );
};

export default SocialShare;
