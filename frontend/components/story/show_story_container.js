import { connect } from 'react-redux';

import { fetchStory } from '../../actions/story_actions';
import { followUser, unfollowUser } from '../../actions/follow_actions';

import ShowStory from './show_story';

const mapStateToProps = (state, ownProps) => {
  if (state.entities.stories[ownProps.match.params.id]) {
    let story = state.entities.stories[ownProps.match.params.id];
    let author = state.entities.users[story.author_id];
  }

  return {
    story: story,
    author: author
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStory: id => dispatch(fetchStory(id)),
    followUser: id => dispatch(followUser(id)),
    unfollowUser: id => dispatch(unfollowUser(id))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ShowStory);
