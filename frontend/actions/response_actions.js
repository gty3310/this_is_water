import * as APIUtil from '../util/response_api_util';

export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';
export const RECEIVE_RESPONSES = 'RECEIVE_RESPONSES';

export const receiveResponse = payload => {
  return {
    type: RECEIVE_RESPONSE,
    payload
  };
};

export const createResponse = response => dispatch => {
  return APIUtil.createResponse(response).then(
    payload => dispatch(receiveResponse(payload))
  );
};

export const deleteResponse = response => dispatch => {
  return APIUtil.destroyStory(response).then(
    payload => dispatch(receiveResponse(payload))
  );
};
