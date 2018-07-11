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
          <p>Write a story (should link to /articles/new)</p>
        </div>
      );
    } else {
      return (
        <div className="header-left">
          <p>About ThisIsWater (should link to github)</p>
        </div>
      );
    }
  };

  return (
    <div>
      <Modal></Modal>

      <header>
        {leftHead()}

        <h1 className="header-middle">ThisIsWater (should link to splash)</h1>
        <GreetingContainer></GreetingContainer>
      </header>
    </div>
  );
};

const mapStateToProps = ({session, entities: { users }}) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(mapStateToProps)(Header);
