import './TA.css';
import chartBackground from '../../../assets/chartBackground.gif';
import 'animate.css';
import SocialShare from '../../SocialShare/SocialShare';

const ChartTypes = () => {
    const closeVideo = () => {
        const checkbox = document.querySelector('.checkbox-chart');
        if (checkbox) checkbox.checked = false;
    };

    return (
        <div className='chart'>
            <div className="imageContainer">
                <img className='chartbg' src={chartBackground} alt="Chart Types Background" />
                <h1 class='animate__animated animate__bounceInLeft'>Chart Types</h1>
            </div>
            <div className='chart-content'>
                <h4 class='animate__animated animate__bounceIn'>4 minutes read</h4>
                <h3>Line Chart</h3>
                <p>A line chart connects the closing prices over a specified period. It's simple and provides a clear visual of a security's price movement.</p>
                <h3>Bar Chart</h3>
                <p>Bar charts display the opening, high, low, and closing prices for a specific period. Each bar represents a period (e.g., 1 day).</p>
                <h3>Candlestick Chart</h3>
                <p>Candlestick charts provide more information than line and bar charts. They display the open, high, low, and close prices, but also show the direction of movement.</p>
                <div className='wrapper-chart'>
                    <input type="checkbox" className="checkbox-chart" />
                    <div className="video-chart">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_LINK_HERE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

export default ChartTypes;
