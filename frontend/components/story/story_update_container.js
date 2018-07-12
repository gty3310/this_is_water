import React from 'react';
import { connect } from 'react-redux';
import { updateStory, fetchStory } from '../../actions/story_actions';
import StoryUpdate from './story_update';

const mapStateToProps = (state, ownProps) => {
  return {
    story: state.entities.stories[ownProps.match.params.id],
    currentUser: state.entities.users[state.ui.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStory: id => dispatch(fetchStory(id)),
    updateStory: (story, id) => dispatch(updateStory(story, id))
  };
};

export default connect (
  mapStateToProps, mapDispatchToProps
)(StoryUpdate);
