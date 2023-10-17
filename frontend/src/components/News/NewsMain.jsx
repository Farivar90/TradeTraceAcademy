import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import newsmainbg from '../../assets/newsmain.gif';


function NewsMain () {

    return (
      <div className="news-main1">
                <img id='news-main-bg' src={newsmainbg} alt="nm" />
            <section className="news-sec">
                <h3>I don't have enough budget to purchase the paid plan for the news API, so the data is not up-to-date!</h3>
            </section>
    </div>
  );
}


export default NewsMain;