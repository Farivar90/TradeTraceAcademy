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
import IntroductionToForex from './components/IntroductionToForex/IntroductionToForex';
import WhatIsForex from './components/IntroductionToForex/1WhatIsForex';
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
            <AuthRoute exact path="/IntroductionToForex" component={IntroductionToForex} />
            <AuthRoute exact path="/IntroductionToForex/WhatIsForex" component={WhatIsForex} />
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
    </>
  );
}

export default App;
