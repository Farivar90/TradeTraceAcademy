import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import navlogo from '../../assets/transTT.png'
import React, { useEffect, useState } from 'react';
import Menu from './Menu';

function NavBar () {
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  
  const logoutUser = e => {
      e.preventDefault();
      dispatch(logout());
  }

  useEffect(() => {
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        // Cleanup the event listener on component unmount
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className="links-nav signup">
          <Link className="glow-on-hover" to={'/profile'}>Profile</Link>
          <Link className="glow-on-hover" onClick={logoutUser}>Logout</Link>
        </div>
      );
    } else {
      return (
        <div className="links-auth">
          <div className='signup'>
            <Link to={'/signup'} className="glow-on-hover">Signup</Link>
          </div>
          <div className='login'>
            <Link to={'/login'} className="glow-on-hover">Login</Link>
          </div>
        </div>
      );
    }
  }

  return (
    <>
    <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navlogo">
        <Link to={'/'}>
          <img src={navlogo} alt="navlogo" />
        </Link>
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="nav-links">
          { getLinks() }
      </div>
      </nav>
    </>
  );
}

export default NavBar;