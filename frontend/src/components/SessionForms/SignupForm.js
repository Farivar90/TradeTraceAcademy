import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SessionForm.css'; // Assuming this is where you'll place the provided CSS

import { signup, clearSessionErrors } from '../../store/session';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = field => {
    let setState;

    switch (field) {
      case 'email':
        setState = setEmail;
        break;
      case 'username':
        setState = setUsername;
        break;
      case 'password':
        setState = setPassword;
        break;
      case 'password2':
        setState = setPassword2;
        break;
      default:
        throw Error('Unknown field in Signup Form');
    }

    return e => setState(e.currentTarget.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      username,
      password
    };

    dispatch(signup(user)); 
  }

  return (
    <section className='ses-section'>
      <div className="form-box-se">
        <div className="form-value-se">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="errors-se">{errors?.email}</div>
            <div className="inputbox-se">
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="email" 
                value={email}
                onChange={update('email')}
                required
              />
              <label>Email</label>
            </div>
            <div className="errors-se">{errors?.username}</div>
            <div className="inputbox-se">
              <ion-icon name="person-outline"></ion-icon>
              <input 
                type="text" 
                value={username}
                onChange={update('username')}
                required
              />
              <label>Username</label>
            </div>
            <div className="errors-se">{errors?.password}</div>
            <div className="inputbox-se">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input 
                type="password" 
                value={password}
                onChange={update('password')}
                required
              />
              <label>Password</label>
            </div>
            <div className="errors-se">
              {password !== password2 && 'Confirm Password field must match'}
            </div>
            <div className="inputbox-se">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input 
                type="password" 
                value={password2}
                onChange={update('password2')}
                required
              />
              <label>Confirm Password</label>
            </div>
            <button className='button-ses' disabled={!email || !username || !password || password !== password2}>Sign Up</button>
            <div className="register">
              <p>Already have an account? <a href="/login">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
