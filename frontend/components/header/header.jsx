import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Modal from './modal/modal';
import HeaderRightContainer from './header_right/header_right_container';

const Header = props => {
  const headerLeft = () => {
    if (!!props.currentUser) {
      return (
        <div className="headerLeft">
          <Link to="/stories/new">Write a story</Link>
        </div>
      );
    } else {
      return (
        <div className="headerLeft">
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

      <div className="header">
        {headerLeft()}

        <Link to="/" className="headerMiddle">
          <h1 className="header-middle-logo">
            ThisIsWater
          </h1>
        </Link>

        <HeaderRightContainer></HeaderRightContainer>
      </div>

    </div>
  );
};

const mapStateToProps = ({ui: {session}, entities: { users }}) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(mapStateToProps)(Header);
