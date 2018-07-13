import React from 'react';
import { Link } from 'react-router-dom';

const HeaderRight = ({ currentUser, logout, openModal, demoLogin }) => {
  const loggedOutDisplay = () => (
    <div className="headerRight-loggedOutDisplay-container">
      <button className="signIn-button" onClick={() => openModal('login')}>Sign in</button>
      &nbsp;&nbsp;
      <button className="signUp-button" onClick={() => openModal('signup')}>Get started</button>
      &nbsp;&nbsp;
      <button className="takeATour-button" onClick={demoLogin}>Take a tour</button>
    </div>
  );

  const loggedInDisplay = () => (
    <div className="headerRight-loggedInDisplay-container">

      <button className="logOut-button" onClick={logout}>Log Out</button>

      <div className="profile-button">
        <Link to={`/users/${currentUser.id}`}>Profile</Link>
      </div>

    </div>
  );

  return currentUser ? loggedInDisplay(currentUser, logout) : loggedOutDisplay();
};


export default HeaderRight;


// <h2 className="header-name">Hi, {currentUser.username}!</h2>
// <Link to="/login">Login</Link>
// <Link to="/signup">Sign up!</Link>
