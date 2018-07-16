import * as APIUtil from '../util/clap_api_util';

export const RECEIVE_CLAPS = 'RECEIVE_CLAPS';

export const receiveClaps = payload => {
  return {
    type: RECEIVE_CLAPS,
    payload
  };
};

export const createClap = clapData => dispatch => {
  return APIUtil.createClap(clapData).then(
    payload => dispatch(receiveClaps(payload))
  );
};
