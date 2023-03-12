import React from 'react';
import './LogoSearch.css';
import { Link } from 'react-router-dom';

const LogoSearch = () => {
  return (
    <div className="logo">
      <Link to="../home">
        <h1>PostIt</h1>
      </Link>
    </div>
  );
};

export default LogoSearch;
