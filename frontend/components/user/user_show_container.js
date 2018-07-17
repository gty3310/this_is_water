import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import { fetchAllStories } from '../../actions/story_actions';
import { followUser, unfollowUser } from '../../actions/follow_actions';

import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  let stories;
  let followedUsers;
  const user = state.entities.users[ownProps.match.params.id];
  const currentUser = state.entities.users[state.ui.session.id] || {};


  return ({
    user: user,
    currentUser: currentUser,
    stories: Object.values(state.entities.stories).filter(ownStory => ownStory.author_id === user.id) || {},
    users: state.entities.users
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    getUser: id => dispatch(fetchUser(id)),
    fetchAllStories: () => dispatch(fetchAllStories()),
    followUser: id => dispatch(followUser(id)),
    unfollowUser: id => dispatch(unfollowUser(id))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(UserShow);
