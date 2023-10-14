import './TS.css';
import riskBackground from '../../../assets/rm.gif';
import 'animate.css';
import SocialShare from '../../SocialShare/SocialShare';

const RiskManagement = () => {
    const closeVideo = () => {
        const checkbox = document.querySelector('.checkbox-risk');
        if (checkbox) checkbox.checked = false;
    };

    return (
        <div className='risk'>
            <div className="imageContainer" id='rmc'>
                <img className='riskbg' id='rmbg' src={riskBackground} alt="Risk Management Background" />
                <h1 class='animate__animated animate__bounceInLeft'>Risk Management</h1>
            </div>
            <div className='risk-content'>
                <h4 class='animate__animated animate__bounceIn'>4 minutes read</h4>
                <p>Risk management in forex trading is the process of identifying, assessing, and prioritizing the risks associated with trading decisions. It involves evaluating the potential losses from an investment and then taking appropriate actions to mitigate or eliminate the risks.</p>
                <h3>Importance of Risk Management</h3>
                <p>Effective risk management can help traders protect their capital and limit potential losses. It's an essential component of long-term trading success.</p>
                <h3>Key Risk Management Techniques</h3>
                <p>Some of the common techniques include setting stop-loss orders, diversifying the portfolio, and only risking a small percentage of the trading capital on a single trade.</p>
                <div className='wrapper-risk'>
                    <input type="checkbox" className="checkbox-risk" />
                    <div className="video-risk">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/s8wC6U7QJmQ?si=mri9o35Pb0L4NkXF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        <button className="close-video" onClick={closeVideo}>Close Video</button>
                    </div>
                    <div className="text-risk">
                        <span data-text="Watch the video"></span>
                    </div>
                </div>
                <SocialShare/>
                <div className='back-to-psychology'>
                    <a href="/Lessons/TradingPsychology">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Back to Trading Psychology page
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RiskManagement;
