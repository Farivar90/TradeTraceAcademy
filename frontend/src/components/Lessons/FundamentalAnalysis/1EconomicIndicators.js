import './FA.css';
import eiBackground from '../../../assets/ei.gif';
import 'animate.css';
import SocialShare from '../../SocialShare/SocialShare';

const EconomicIndicators = () => {
    const closeVideo = () => {
        const checkbox = document.querySelector('.checkbox-wif');
        if (checkbox) checkbox.checked = false;
    };

    return (
        <div className='ei'>
            <div className="imageContainer">
                <img className='eibg' src={eiBackground} alt="Economic Indicators Background" />
                <h1 class='animate__animated animate__bounceInLeft' id='ecoind'>Economic Indicators</h1>
            </div>
            <div className='ei-content'>
                <h4 class='animate__animated animate__bounceIn'>5 minutes read</h4>
                <p>Economic indicators are statistics about economic activities that allow analysis of economic performance and predictions of future performance. They play a crucial role in the forex market, influencing traders' decisions and currency values.</p>
                <h3>Types of Economic Indicators</h3>
                <p>Economic indicators can be broadly categorized into three types: Leading, Lagging, and Coincident indicators. Each type provides different insights into the state of an economy.</p>
                <h3>Impact on Forex Market</h3>
                <p>Traders closely monitor these indicators as they can significantly impact currency values. For instance, a positive employment report can boost a country's currency value.</p>
                <h3>Key Economic Indicators</h3>
                <p>Some of the most influential economic indicators in the forex market include Gross Domestic Product (GDP), Unemployment Rate, Inflation Rate, and Central Bank Interest Rates.</p>
                <div className='wrapper-wif'>
                    <input type="checkbox" className="checkbox-wif" />
                    <div className="video-wif">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XOiZGFc5N1s?si=ZWvSXmMpkmjkpkdK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <button className="close-video" onClick={closeVideo}>Close Video</button>
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

export default EconomicIndicators;
