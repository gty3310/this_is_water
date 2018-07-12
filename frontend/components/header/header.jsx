import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';
import Modal from '../modal/modal';

const Header = props => {
  const leftHead = () => {

    if (!!props.currentUser) {
      return (
        <div className="header-left">
          <Link to="/stories/new">Write a story</Link>
        </div>
      );
    } else {
      return (
        <div className="header-left">
          <a href="https://github.com/andrewlidong/this_is_water" target="_blank">
            <p>About ThisIsWater</p>
          </a>
        </div>
      );
    }
  };

  return (
    <div>
      <Modal></Modal>

      <header>
        {leftHead()}

        <Link to="/" className="header-middle">
          <h1 className="header-middle-logo">
            ThisIsWater
          </h1>
        </Link>

        <GreetingContainer></GreetingContainer>
      </header>

    </div>
  );
};

const mapStateToProps = ({ui: {session}, entities: { users }}) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(mapStateToProps)(Header);