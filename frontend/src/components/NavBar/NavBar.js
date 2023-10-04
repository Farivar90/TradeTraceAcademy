import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';

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
          {/* <Link to={'/tweets'}>All Streams</Link> */}
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/tweets/new'}>Write a Stream</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="links-auth">
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  return (
    <>
    <nav className="nav-bar">
      <h1 className="logo">BuzzStream</h1>
      <div className="nav-links">
      { getLinks() }
      </div>
      </nav>
    </>
  );
}

export default NavBar;