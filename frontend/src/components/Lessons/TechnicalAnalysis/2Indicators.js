import './TA.css';
import indicatorsBackground from '../../../assets/ind.jpg';
import 'animate.css';
import SocialShare from '../../SocialShare/SocialShare';

const Indicators = () => {
    const closeVideo = () => {
        const checkbox = document.querySelector('.checkbox-chart');
        if (checkbox) checkbox.checked = false;
    };

    return (
        <div className='chart'>
            <div className="imageContainer">
                <img className='indicatorsbg' src={indicatorsBackground} alt="Indicators Background" />
                <h1 className='animate__animated animate__bounceInLeft'>Indicators</h1>
            </div>
            <div className='chart-content'>
                <h4 className='animate__animated animate__bounceIn'>5 minutes read</h4>
                <h3>Moving Averages</h3>
                <p>Moving averages smooth out price data to create a single flowing line, which makes spotting trends easier.</p>
                <h3>MACD (Moving Average Convergence Divergence)</h3>
                <p>MACD is a trend-following momentum indicator that shows the relationship between two moving averages of a security’s price.</p>
                <h3>RSI (Relative Strength Index)</h3>
                <p>RSI is a momentum oscillator that measures the speed and change of price movements. RSI oscillates between zero and 100.</p>
                <h5>
                    There is too many indicators but I am just one person who can't speak English very well and I am tired so thats it!
                </h5>
                <div className='wrapper-chart'>
                    <input type="checkbox" className="checkbox-chart" />
                    <div className="video-chart">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PfquDvN0fwI?si=1aIY6V9bvmvlT42r" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                        
                    <button className="close-video" onClick={closeVideo}>Close Video</button>
                    </div>
                    <div className="text-chart">
                        <span data-text="Watch the video"></span>
                    </div>
                </div>
                <SocialShare/>
                <div className='back-to-technical'>
                    <a href="/Lessons/TechnicalAnalysis">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Back to Technical Analysis page
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Indicators;
