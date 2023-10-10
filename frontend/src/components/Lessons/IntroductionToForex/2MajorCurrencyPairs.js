import './ITF.css';
import mcp from '../../../assets/mcp.gif';
import 'animate.css';

const MajorCurrencyPairs = () =>{
    const closeVideo = () => {
        // If you're using refs with React:
        const checkbox = document.querySelector('.checkbox-wif');
        if (checkbox) checkbox.checked = false;
    };
    
    return (
        <div className='wif'>
            <div className="imageContainer">
                <img className='atcbg' src={mcp} alt="atcbg" />
                <h1 class='animate__animated animate__bounceInLeft'>Major Currency Pairs</h1>
            </div>
            <div className='wif-content'>
            <h4 class='animate__animated animate__bounceIn'>5 minutes read</h4>
            <p>
                The major currency pairs are some of the most popular currency combinations in the forex market. Prices in these pairs often move in tighter bands, but their movements can still be volatile. Learn about the major forex pairs here.
            </p>
            <h3>What are major currency pairs?</h3>
            <p>
                Opinions differ slightly over a definitive list of major currencies, but most will include the traditional ‘four majors’ – EUR/USD, USD/JPY, GBP/USD and USD/CHF – as well as the three most-traded ‘commodity currencies’ against the US dollar, which are AUD/USD, USD/CAD and NZD/USD.
            </p>
            <br />
            <p>
                While most lists only include these seven majors, some traders would also include key currency pairings which don’t feature the US dollar at all – otherwise known as ‘cross currencies’ – in their list of major currencies. Some of the most traded of these are the GBP/EUR, EUR/CHF and EUR/JPY.
            </p>
            <br />
            <h3>The four traditional majors</h3>
            <p>
                Below is a profile on each of the four traditional major currencies, as well as what affects their price movements. It is worth mentioning, that the most popular currency pairs in terms of trading volume are not always considered majors. Instead, the four majors are the more traditionally popular currency pairs on the market. As an example, AUD/USD is currently the fourth most traded currency pair in the world, but it is not counted among the four traditional majors.
            </p>
            <h5>The four traditional majors are:</h5>
            <p id='ffp'>1. EUR/USD</p>
            <p>
                EUR/USD is the most traded forex pair in the world. It holds the euro as the base currency and the US dollar as the quote currency, so the price represents how many dollars you would need to spend in order to buy one euro. For example, if the price quoted for EUR/USD was 1.2500, you would have to spend $1.25 in order to buy €1.
                <br />
                The popularity of EUR/USD as a currency pair means that it is highly liquid and that brokers often offer tight spreads. Equally, it tends to be less volatile than other currency pairs because the US dollar and the euro are backed by the world’s two largest economies.
            </p>
            <p id='ffp'>2. USD/JPY</p>
            <p>
                The first thing that many traders will notice about USD/JPY is that the value of a single pip is much larger than that of the majority of other currencies – often only being quoted to two decimal places. This is true for any currency pair in which the yen appears as the quote currency, and it occurs because of the relatively low value of the yen against the dollar.
                <br />
                The yen’s low value relative to the dollar is due in part to the quantitative easing and low interest rate policies of the Bank of Japan. The low interest rates are an attempt by the Bank of Japan to combat low inflation and slow growth, which has resulted in near-zero or even negative interest rates in Japan at many points in the last 20 years.
                <br />
                The yen is often used as one half of a carry trade, which is where a trader borrows money in a country that has low interest rates and invests in a country that has higher ones. Additionally, the yen is widely recognized as a ‘safe haven’, which can see it rise in times of economic uncertainty. This also leads the value of the USD/JPY pair to be correlated with the USD/CHF pair – because CHF is also seen as a safe haven, which is explained in section four.
            </p>
            <p id='ffp'>3. GBP/USD</p>
            <p>
                GBP/USD has the pound as the base currency and the US dollar as the quote currency, meaning it shows how many dollars you would need to spend in order to buy one pound. GBP/USD is colloquially called ‘cable’ on account of the deep-sea cables that used to transfer price information between London and New York.
                <br />
                Generally speaking, 14:00 (UK time) is when liquidity is most concentrated in this pair, due in part to the fact that this is the time which sees the most overlap in activity for traders in both London and New York.
            </p>
            <p id='ffp'>4. USD/CHF</p>
            <p>
                The presence of the Swiss franc among the top four currencies can look a little odd at first glance. After all, Switzerland isn’t a major global economy – unlike America, Europe, Japan or the UK.
                <br />
                But – similar to the yen – the Swiss franc owes much of its popularity to its status as a safe-haven investment. This has made the franc a popular currency in times of economic uncertainty or market turmoil, as traders seek markets that are perceived as lower risk – similar to the USD/JPY pair.
                <br />
                Switzerland’s long-held reputation for financial stability, safety and neutrality ensures that its reputation as a safe haven is all but solidified. Equally, when market volatility is low, the Swiss franc will usually tend to follow the market movements of the euro, due to the close economic relationship that Switzerland has with the eurozone.
            </p>
            <div className='wrapper-wif'>
                <input type="checkbox" className="checkbox-wif" />
                <div className="video-wif">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tFaQOI0xdWE?si=k07dgxehuJJqAYuJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <button className="close-video" onClick={closeVideo}>Close Video</button>
                </div>
                <div className="text-wif">
                    <span data-text="Watch the video"></span>
                </div>
            </div>
            <div className='back-to-int'>
                <a href="/Lessons/IntroductionToForex">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Back to Introduction page
                </a>
            </div>
            </div>
        </div>
    );
}

export default MajorCurrencyPairs;