import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../redux/actions/authActions';
import './HomePage.css';

// Define fixed admin credentials
const adminCredentials = {
  email: 'jawad@admin.com',
  password: 'admin123',
  isAdmin: true
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === adminCredentials.email && password === adminCredentials.password) {
      dispatch(signIn(adminCredentials.isAdmin, email));
      navigate('/');
    } else {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        dispatch(signIn(user.isAdmin, email));
        navigate('/');
      } else {
        alert('Invalid credentials email or password is wrong');
      }
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign In</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="auth-button" type="submit">Sign In</button>
      </form>
      <p className="auth-switch">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
