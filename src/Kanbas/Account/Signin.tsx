import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './reducer';
import * as client from './client';
import './Signin.css';

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signin = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const currentUser = await client.signin(credentials);
      if (currentUser) {
        dispatch(setCurrentUser(currentUser));
        navigate('/Kanbas/Account/Profile');
      } else {
        setErrors({ general: 'Invalid username or password' });
      }
    } catch (error) {
      setErrors({ general: 'Signin failed. Please try again.' });
    }
  };

  const validate = () => {
    const errors: any = {};
    if (!credentials.username) errors.username = 'Username is required';
    if (!credentials.password) errors.password = 'Password is required';
    return errors;
  };

  return (
    <div
      id="wd-signin-screen"
      className="d-flex flex-column align-items-center"
    >
      <h1>Sign In</h1>
      <input
        id="wd-username"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        value={credentials.username || ''}
        className="form-control mb-2 wd-input"
        placeholder="username"
      />
      {errors.username && <div className="wd-error">{errors.username}</div>}
      <input
        id="wd-password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        value={credentials.password || ''}
        className="form-control mb-2 wd-input"
        placeholder="password"
        type="password"
      />
      {errors.password && <div className="wd-error">{errors.password}</div>}
      {errors.general && <div className="wd-error">{errors.general}</div>}
      <button
        id="wd-signin-btn"
        onClick={signin}
        className="btn btn-primary w-100 wd-btn"
      >
        Sign In
      </button>
      <br />
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="mt-2">
        Sign up
      </Link>
    </div>
  );
}
