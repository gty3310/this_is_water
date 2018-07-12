import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.entities.users[ownProps.match.params.id],
    currentUser: state.entities.users[state.ui.session.id],
    stories: state.entities.stories
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    getUser: id => dispatch(fetchUser(id))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(UserShow);
