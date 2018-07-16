import * as APIUtil from '../util/follow_api_util';
import { receiveUser } from './user_actions';

export const followUser = id => dispatch => {
  return APIUtil.followUser(id).then(
    user => dispatch(receiveUser(user))
  );
};

export const unfollowUser = id => dispatch => {
  return APIUtil.unfollowUser(id).then(
    user => dispatch(receiveUser(user))
  );
};
