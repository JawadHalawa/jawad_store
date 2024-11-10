// src/components/NotFound/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2 className="not-found-title">Page Not Found</h2>
      <p className="not-found-text">
        Sorry, the page you are looking for does not exist. You can always go back to the 
        <Link to="/"> home page</Link>.
      </p>
    </div>
  );
};

export default NotFound;
