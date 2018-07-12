import {
  RECEIVE_STORIES,
  RECEIVE_STORY,
  REMOVE_STORY
} from '../actions/story_actions';
import merge from 'lodash/merge';

const StoriesReducer = (state={}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_STORIES:
      return action.stories;
    case RECEIVE_STORY:
      return merge(newState, {[action.story.id]: action.story});
    case REMOVE_STORY:
      delete newState[action.storyId];
      return newState;
    default:
      return state;
  }
};

export default StoriesReducer;
