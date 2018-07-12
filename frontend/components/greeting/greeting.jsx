import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal, demoLogin }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="login-modal" onClick={() => openModal('login')}>Sign in</button>
      &nbsp;&nbsp;
      <button className="signup-modal" onClick={() => openModal('signup')}>Get started</button>
      &nbsp;&nbsp;
      <button className="demo-login" onClick={demoLogin}>Take a tour</button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <div className="profile-page">
        <Link to={`/users/${currentUser.id}`}>Profile</Link>
      </div>
      
      <button className="logout-button" onClick={logout}>Log Out</button>

    </hgroup>
  );

  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};


export default Greeting;


// <h2 className="header-name">Hi, {currentUser.username}!</h2>
// <Link to="/login">Login</Link>
// <Link to="/signup">Sign up!</Link>
