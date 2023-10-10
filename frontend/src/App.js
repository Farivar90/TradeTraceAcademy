import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import LoginForm from './components/SessionForms/LoginForm';
import SignupForm from './components/SessionForms/SignupForm';
import Profile from './components/Profile/Profile';
import { getCurrentUser } from './store/session';
import AnimatedSVG from  './components/Loading/ALoader';
import Lessons from './components/Lessons/Lessons';
import IntroductionToForex from './components/Lessons/IntroductionToForex/IntroductionToForex';
import WhatIsForex from './components/Lessons/IntroductionToForex/1WhatIsForex';
import MajorCurrencyPairs from './components/Lessons/IntroductionToForex/2MajorCurrencyPairs';
import ForexMarketHours from './components/Lessons/IntroductionToForex/3ForexMarketHours';
import FundamentalAnalysis from './components/Lessons/FundamentalAnalysis/FundamentalAnalysis';
import TechnicalAnalysis from './components/Lessons/TechnicalAnalysis/TechnicalAnalysis';
import TradingPsychology from './components/Lessons/TradingPsychology/TradingPsychology';
import TradingPlatforms from './components/Lessons/TradingPlatforms/TradingPlatforms';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showButton, setShowButton] = useState(false); // State to control button visibility
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));

    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {loaded ? (
        <>
          <NavBar />
          <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginForm} />
            <AuthRoute exact path="/signup" component={SignupForm} />
            <AuthRoute exact path="/Lessons" component={Lessons} />
            <AuthRoute exact path="/Lessons/IntroductionToForex" component={IntroductionToForex} />
            <AuthRoute exact path="/Lessons/FundamentalAnalysis" component={FundamentalAnalysis} />
            <AuthRoute exact path="/Lessons/TechnicalAnalysis" component={TechnicalAnalysis} />
            <AuthRoute exact path="/Lessons/TradingPsychology" component={TradingPsychology} />
            <AuthRoute exact path="/Lessons/TradingPlatforms" component={TradingPlatforms} />
            <AuthRoute exact path="/Lessons/IntroductionToForex/WhatIsForex" component={WhatIsForex} />
            <AuthRoute exact path="/Lessons/IntroductionToForex/ForexMarketHours" component={ForexMarketHours} />
            <AuthRoute exact path="/Lessons/IntroductionToForex/MajorCurrencyPairs" component={MajorCurrencyPairs} />
            <ProtectedRoute exact path="/profile" component={Profile} />
          </Switch>
          {showButton && (
  <button 
    className="scroll-up-btn"
    onClick={scrollToTop}
  >
    <span className="fas fa-angle-up" style={{fontSize: '32px', color: 'white'}}></span>
    <i></i>
  </button>
)}

        </>
      ) : (
        <AnimatedSVG />
      )}
       <footer className="footer-m">&copy; 2023 F.A Financial Department</footer>
    </>
  );
}

export default App;
