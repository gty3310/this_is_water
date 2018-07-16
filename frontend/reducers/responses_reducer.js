import { RECEIVE_RESPONSE } from '../actions/response_actions';
import { RECEIVE_STORY } from '../actions/story_actions';
import { RECEIVE_CLAPS } from '../actions/clap_actions';

import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_RESPONSE:
      newState[action.payload.response.id] = action.payload.response;
      return newState;
    case RECEIVE_STORY:
      merge(newState, action.payload.responses);
      return newState;
    case RECEIVE_CLAPS:
      // if (action.payload.story) {
      //   return newState;
      // }
      
      if (action.payload.response) {
        newState[action.payload.response.id].totalClaps = action.payload.response.totalClaps;
        return newState;
      }
      return newState;
    default:
      return state;
  }
};
