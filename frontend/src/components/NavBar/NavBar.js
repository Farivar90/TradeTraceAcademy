import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import navlogo from '../../assets/transTT.png'

function NavBar () {
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  
  const logoutUser = e => {
      e.preventDefault();
      dispatch(logout());
  }

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className="links-nav">
          <Link to={'/profile'}>Profile</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="links-auth">
          <div className='signup'>
            <Link to={'/signup'}>Signup</Link>
          </div>
          <div className='login'>
            <Link to={'/login'}>Login</Link>
          </div>
        </div>
      );
    }
  }

  return (
    <>
    <nav className="nav-bar">
      <div className="navlogo">
        <Link to={'/'}>
          <img src={navlogo} alt="navlogo" />
        </Link>
      </div>
      <div className="nav-links">
          { getLinks() }
      </div>
      </nav>
    </>
  );
}

export default NavBar;