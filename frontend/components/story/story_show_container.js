import React from 'react';
import { connect } from 'react-redux';
import { fetchStory } from '../../actions/story_actions';
import StoryShow from './story_show';

const mapStateToProps = (state, ownProps) => {
  return {
    story: state.entities.stories[ownProps.match.params.id],
    currentUser: state.entities.users[state.ui.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStory: id => dispatch(fetchStory(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryShow);
