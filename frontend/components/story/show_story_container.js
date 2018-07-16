import { connect } from 'react-redux';

import { fetchStory } from '../../actions/story_actions';
import { followUser, unfollowUser } from '../../actions/follow_actions';
import { responsesForStory } from '../../reducers/selectors';

import ShowStory from './show_story';

const mapStateToProps = (state, ownProps) => {
  let responses;
  let author;
  const paramsId = ownProps.match.params.id;
  const story = state.entities.stories[paramsId];

  if (story) {
    author = state.entities.users[story.author_id];
    if (story.responses_array) {
      responses = responsesForStory(state, story.responses_array);
    }
  }
  // debugger

  return {
    story: story,
    author: author,
    responses: responses
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
