import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SessionForm.css'; // Assuming this is where you'll place the provided CSS

import { login, clearSessionErrors } from '../../store/session';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    const setState = field === 'email' ? setEmail : setPassword;
    return e => setState(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  }

  return (
    <section className='ses-section'>
      <div className="form-box-se">
        <div className="form-value-se">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
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
            <div className="forget">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              {/* <label>
                <a href="#">Forgot password?</a>
              </label> */}
            </div>
            <button className='button-ses' disabled={!email || !password}>Log in</button>
            <div className="register">
              <p>Don't have an account? <a href="/signup">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
