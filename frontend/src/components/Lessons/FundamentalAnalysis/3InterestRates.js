import './FA.css';
import irBackground from '../../../assets/ir.gif';
import 'animate.css';
import SocialShare from '../../SocialShare/SocialShare';

const InterestRates = () => {
    const closeVideo = () => {
        const checkbox = document.querySelector('.checkbox-wif');
        if (checkbox) checkbox.checked = false;
    };

    return (
        <div className='ei'>
            <div className="imageContainer">
                <img className='irbg' src={irBackground} alt="Interest Rates Background" />
                <h1 className='animate__animated animate__bounceInLeft'>Interest Rates and Central Bank Decisions</h1>
            </div>
            <div className='ei-content'>
                <h4 className='animate__animated animate__bounceIn'>5 minutes read</h4>
                <p>Interest rates set by central banks, such as the Federal Reserve in the US, play a crucial role in the forex market. They can influence the attractiveness of a country's currency and its overall economic health.</p>
                <h3>Why Interest Rates Matter</h3>
                <p>Higher interest rates offer lenders in an economy a higher return relative to other countries. Therefore, higher interest rates attract foreign capital and cause the exchange rate to rise.</p>
                <h3>Central Bank Decisions</h3>
                <p>Central banks control the short-term interest rates. These decisions can influence the forex market as traders anticipate how monetary policy will affect the economy's future.</p>
                <div className='wrapper-wif'>
                    <input type="checkbox" className="checkbox-wif" />
                    <div className="video-wif">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HBmOBOqVT74?si=41svEOD9kVbh6wFe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                        <button className="close-video" onClick={closeVideo}>Close Video</button>
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

export default InterestRates;
