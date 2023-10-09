import './ITF.css';
import atc from '../../assets/fmh.gif';
import ses from '../../assets/sessions.png';
import ses2 from '../../assets/ses2.png';
import ses3 from '../../assets/ses3.png';
import 'animate.css';

const ForexMarketHours = () =>{
    const closeVideo = () => {
        // If you're using refs with React:
        const checkbox = document.querySelector('.checkbox-wif');
        if (checkbox) checkbox.checked = false;
    };
    return (
        <div className='wif'>
            <div className="imageContainer">
                <img className='atcbg' src={atc} alt="atcbg" />
                <h1 class='animate__animated animate__bounceInLeft'>Forex Market Hours</h1>
            </div>
            <h4 class='animate__animated animate__bounceIn'>7 minutes read</h4>
            <p>The forex market is open 24 hours a day during the weekdays which allows traders to potentially trade all day and all night.
                <br />
                Knowing the forex market’s operating hours is essential for a trader. You need to know when the forex market opens and closes as well as the four main trading sessions.
            </p>
            <h3>Forex Trading Sessions</h3>
            <p>The four main trading sessions are:
                Just because you can trade the market any time of the day or night doesn't necessarily mean that you should.
                <br />
                <br />
                The best time to trade is when the market is active with lots of forex traders opening and closing positions, which creates a large volume of trades.
                <br />
                <br />
                The forex market can be broken up into four major trading sessions: the Sydney session, the Tokyo session, the London session, and the New York session.
            </p>
            <img className='fmh-ses' src={ses} alt="fmh-ses" />
            <h3>Forex Trading Volume</h3>
            <p>
                You can make money trading when the market moves up, and you can even make money when the market moves down. But you will have a very difficult time trying to make money when the market doesn't move at all.
                <br />
                <br />
                In order for the market to move, lots of trades need to occur. And this is why you should focus your energy during specific trading sessions.
                <br />
                <br />
                The forex trading sessions are named after major financial centers and are loosely based on the local “work day” of traders working in those cities.
                <br />
                The more traders…trading, the higher the trading volume, and the more active the market.
                <br />
                The more active the market, the tighter the spreads you'll get and the less slippage you'll experience. In a nutshell, you'll get better order execution.
            </p>
            <img className='fmh-ses' src={ses2} alt="fmh-ses2" />

            <h3>When is the best time to trade forex?</h3>
            <p>
                During the weekdays, there’s always at least one forex trading session open although there are periods of downtime when the market is really quiet and trading volume is low or “thin”.
                <br />
                <br />
                You usually want to avoid trading when only one trading session is open and instead, wait for trading sessions to overlap.
                <br />
                <br />
                When two major financial centers are open, the number of traders actively buying and selling a given currency greatly increases.
                <br />
                <br />
                The highest trading volume occurs during the overlap of the London and New York trading sessions. More than 50% of trading volume occurs at these two financial centers.
            </p>
            <img className='fmh-ses' src={ses3} alt="fmh-ses3" />
            <p>
                The best time for you to trade forex will depend on which currency pair you’re looking to trade.
                <br />
                <br />
                Most of the trading activity for a specific currency pair will occur when the trading sessions of the individual currencies overlap.
                <br />
                <br />
                For example, AUD/JPY will experience a higher trading volume when both Sydney and Tokyo sessions are open. And EUR/USD will experience a higher trading volume when both London and New York sessions are open.
            </p>
            <h5>Forex Market Hours Summary</h5>
            <p id='ffp'>Sydney is open from 9:00 pm to 6:00 am UTC</p>
            <p id='ffp'>Tokyo is open from 12:00 am to 9:00 am UTC</p>
            <p id='ffp'>London is open from 7:00 am to 4:00 pm UTC</p>
            <p id='ffp'>New York is open from 1:00 pm to 10:00 pm UTC</p>

            <div className='wrapper-wif'>
                <input type="checkbox" className="checkbox-wif" />
                <div className="video-wif">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5UzWPEcY7H8?si=RYw_gIlTWdDZHJQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    <button className="close-video" onClick={closeVideo}>Close Video</button>
                </div>
                <div className="text-wif">
                    <span data-text="Watch the video"></span>
                </div>
            </div>
            <div className='back-to-int'>
                <a href="/IntroductionToForex">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Back to Introduction page
                </a>
            </div>
        </div>

    );
};

export default ForexMarketHours;