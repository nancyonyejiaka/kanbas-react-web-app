import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './reducer';
import * as client from './client';
import './Signin.css';

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const currentUser = await client.signup(user);
      if (currentUser) {
        dispatch(setCurrentUser(currentUser));
        navigate('/Kanbas/Account/Profile');
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setErrors({ username: error.response.data.message });
      } else {
        setErrors({ general: 'Signup failed. Please try again.' });
      }
    }
  };

  const validate = () => {
    const errors: any = {};
    if (!user.username) errors.username = 'Username is required';
    if (!user.password) errors.password = 'Password is required';
    return errors;
  };

  return (
    <div
      id="wd-signup-screen"
      className="d-flex flex-column align-items-center"
    >
      <h1>Sign Up</h1>
      <input
        value={user.username || ''}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="form-control mb-2 wd-input"
        placeholder="username"
      />
      {errors.username && <div className="wd-error">{errors.username}</div>}
      <input
        value={user.password || ''}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        className="form-control mb-2 wd-input"
        placeholder="password"
      />
      {errors.password && <div className="wd-error">{errors.password}</div>}
      {errors.general && <div className="wd-error">{errors.general}</div>}
      <button onClick={signup} className="btn btn-primary w-100 wd-btn">
        Sign up
      </button>
      <br />
      <Link to="/Kanbas/Account/Signin" className="mt-2">
        Sign in
      </Link>
    </div>
  );
}
