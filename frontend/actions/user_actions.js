import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveAllUsers = payload => {
  return {
    type: RECEIVE_ALL_USERS,
    payload
  };
};

export const fetchUser = id => dispatch => {
  return APIUtil.fetchUser(id).then(
    user => dispatch(receiveUser(user))
  );
};

export const fetchAllUsers = () => dispatch => {
  return APIUtil.fetchAllUsers.then(
    payload => dispatch(receiveAllUsers(payload))
  );
};
