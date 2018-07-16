import { RECEIVE_STORY, RECEIVE_ALL_STORIES } from '../actions/story_actions';
import { RECEIVE_RESPONSE } from '../actions/response_actions';
import { RECEIVE_CLAPS } from '../actions/clap_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  // const action.payload.stories = action.payload.stories || {};
  // const action.payload.story = action.payload.story || {};

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.payload.stories || {};
    case RECEIVE_STORY:
      newState[action.payload.story.id] = action.payload.story;
      return newState;
    case RECEIVE_RESPONSE:
      newState[action.payload.story.id].responses_array = action.payload.story.responses_array;
      return newState;
    case RECEIVE_CLAPS:
      if (action.payload.story.id) {
        newState[action.payload.story.id].totalClaps = action.payload.story.totalClaps;
      }
      return newState;
    default:
      return state;
  }
};
