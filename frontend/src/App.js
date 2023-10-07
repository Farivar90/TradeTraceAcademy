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

  return loaded && (
    <>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
      {showButton && (
        <div 
          id="button" 
          style={{
            display: 'inline-block',
            backgroundColor: '#001ba4',
            width: '40px',
            height: '40px',
            textAlign: 'center',
            borderRadius: '4px',
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
            cursor: 'pointer'
          }}
          onClick={scrollToTop}
        >
          <i className="fas fa-angle-up" style={{fontSize: '32px', color: 'white'}}></i>
        </div>
      )}
    </>
  );
}

export default App;
