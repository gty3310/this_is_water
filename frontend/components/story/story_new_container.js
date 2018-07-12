import React from 'react';
import { connect } from 'react-redux';
import { createStory } from '../../actions/story_actions';
import StoryNew from './story_new';

const mapStateToProps = (state, ownProps) => {
  const keys = Object.keys(state.entities.stories);

  return {
    currentUser: state.entities.users[state.ui.session.id],
    storyId: keys[keys.length-1],
    errors: state.ui.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStory: story => dispatch(createStory(story))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(StoryNew);
