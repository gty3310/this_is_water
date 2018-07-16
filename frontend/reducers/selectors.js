import values from 'lodash/values';

export const currentUser = state => {
  return state.entities.users[state.ui.session.id];
};

export const responsesForStory = (state, arr) => {
  arr.map(responseId => state.entities.responses[responseId]);
};

export const responder = (state, response) => {
  return state.entities.users[response.responder_id];
};
