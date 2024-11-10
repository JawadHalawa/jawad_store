import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { email, password, isAdmin };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    alert('Signup successful! Please sign in.');
    navigate('/signin');
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign Up</h2>
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
        <label>
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
          Make Me Admin
        </label>
        <button className="auth-button" type="submit">Sign Up</button>
      </form>
      <p className="auth-switch">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
