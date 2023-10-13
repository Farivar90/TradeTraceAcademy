import './FA.css';
import peBackground from '../../../assets/r&m-poli.gif';
import 'animate.css';
import SocialShare from '../../SocialShare/SocialShare';

const PoliticalEvents = () => {
    const closeVideo = () => {
        const checkbox = document.querySelector('.checkbox-wif');
        if (checkbox) checkbox.checked = false;
    };

    return (
        <div className='ei'>
            <div className="imageContainer">
                <img className='pebg' src={peBackground} alt="Political Events Background" />
                <h1 class='animate__animated animate__bounceInLeft'>Political Events and Their Impact</h1>
            </div>
            <div className='ei-content'>
                <h4 class='animate__animated animate__bounceIn'>5 minutes read</h4>
                <p>Political events, ranging from elections to geopolitical tensions, can have profound effects on the forex market. Traders closely monitor these events as they can lead to significant currency value fluctuations.</p>
                <h3>Types of Political Events</h3>
                <p>Major political events include elections, referendums, policy changes, and international disputes. Each of these can influence investor sentiment and currency values.</p>
                <h3>Impact on Forex Market</h3>
                <p>Political stability often leads to investor confidence, boosting a country's currency. Conversely, political turmoil can lead to uncertainty and a decline in currency value.</p>
                <h3>Key Political Events to Monitor</h3>
                <p>Presidential elections, central bank decisions, trade agreements, and international summits are among the political events that forex traders should keep an eye on.</p>
                <div className='wrapper-wif'>
                    <input type="checkbox" className="checkbox-wif" />
                    <div className="video-wif">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/suRw_3wWTxg?si=EcCu-4sWE0PJpH6L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        <button className="close-video" onClick={closeVideo}>Close Video</button>
                    </div>
                    <div className="text-wif">
                        <span data-text="Watch the video"></span>
                    </div>
                </div>
                <SocialShare/>
                <div className='back-to-fundamentals'>
                    <a href="/Lessons/FundamentalAnalysis">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Back to Fundamental Analysis page
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PoliticalEvents;
