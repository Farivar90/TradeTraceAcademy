import './ITF.css';
import atc from '../../assets/ATC-Forex.png';
import 'animate.css';


const WhatIsForex = () =>{
    return (
        <div className='wif'>
            <img className='atcbg' src={atc} alt="atcbg" />
            <h1 class='animate__animated animate__bounceInLeft'>What is Forex?</h1>
            <h4>4-minute read</h4>
            <p>The foreign exchange market – also known as forex or FX – is the world’s most traded market.
                <br />
                According to the Bank for International Settlements, global forex trading in 2022 averaged over $7.5 trillion each day. To put that into context, trading on the stock market averages around $553 billion each month.
                <br />
                Which might seem like a lot, but it is just 7% of the total volume seen in FX.</p>
            <h3>What is forex trading?</h3>
            <p>Forex trading is the buying and selling of global currencies. It’s how individuals, businesses, central banks and governments pay for goods and services in other economies. Whenever you buy a product in another currency, or exchange cash to go on holiday, you’re trading forex.
                <br />
                However, a significant proportion of forex trades aren’t for practical purposes. Speculative FX traders seek to profit from fluctuations in the exchange rates between currencies, speculating on whether one will go up or down in value compared to another.
            </p>
            <h3>How forex trading works</h3>
            <p>Forex is traded in pairs, meaning that when you trade forex, you are exchanging one currency for another. When buying EUR/USD, for example, you’re buying euros while selling the US dollar.
                <br />
                <p>
                If the euro strengthens against the dollar, your position will increase in value
                </p>
                <p>If the euro weakens against the dollar, it will decrease in value
                </p>                    
                <br />
                    Currency markets never decline in absolute terms – for one currency to go up, there will be others weakening against it. All currencies cannot go up at the same time. There is always going to be a winner and a loser. 
                <br />
                    FX traders weigh up whether a currency looks likely to strengthen or weaken against another, then trade that pair accordingly.
                </p>
            <h3>Who trades currencies?</h3>
            <p>Currency markets are crucial to a broad range of participants. Any company that buys or sells overseas, for example, will need to exchange one currency for another as part of their daily operation. Central banks can also be active FX traders, as they seek to keep the currencies they are responsible for under control.
                <br />
                However, global forex trading is dominated by just ten banks, who are responsible for around two-thirds of the world’s volume.
                <br />
                The size of the forex market makes it both highly liquid and dynamic. Prices can change rapidly in response to news and short-term events, creating multiple trading opportunities each day. Institutions trade with banks 24 hours a day, attempting to take advantage of these opportunities to earn a profit and hedge against risk.
                <br />
                The rise of leveraged trading in recent decades has also enabled more and more individual retail traders to enter the world of forex. While retail FX traders might not be responsible for as much of the world’s volume, they act in a similar way to trading institutions – identifying when a currency might be in for a significant price move and trading accordingly.
            </p>
            <h3>Is forex trading right for me?</h3>
            <p>Forex trading is ideal for investors who want the opportunity to trade a market that is open 24 hours a day, while minimizing trading costs and potentially profiting from markets that are rising or falling. However, it contains significant risks to your money and is not suitable for everyone.</p>
            <h5>Forex trading is ideal for people who:</h5>
            <p id='ffp'>1. Are looking for short-term opportunities. FX traders typically hold positions for a few days or weeks, rather than over the long term, with some only seeking to be in the trade for minutes or hours</p>
            <p id='ffp'>2. Want to make their own decisions. Most forex brokers provide an execution-only service. That means they do not advise you on what to trade on and do not trade on your behalf</p>
            <p id='ffp'>3. Are looking to diversify their portfolio. Trading currencies can be a great way of getting global exposure</p>
            
        </div>
    );
};

export default WhatIsForex;