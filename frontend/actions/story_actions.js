import * as APIUtil from '../util/story_api_util';

export const RECEIVE_ALL_STORIES = "RECEIVE_ALL_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";

export const receiveAllStories = payload => {
  return {
    type: RECEIVE_ALL_STORIES,
    payload
  };
};

export const receiveStory = payload => {
  return {
    type: RECEIVE_STORY,
    payload
  };
};

export const fetchAllStories = () => dispatch => {
  return APIUtil.fetchAllStories().then(
    payload => dispatch(receiveAllStories(payload))
  );
};

export const fetchStory = id => dispatch => {
  return APIUtil.fetchStory(id).then(
    payload => dispatch(receiveStory(payload))
  );
};

export const createStory = story => dispatch => {
  return APIUtil.createStory(story).then(
    payload => dispatch(receiveStory(payload))
  );
};

export const updateStory = story => dispatch => {
  return APIUtil.updateStory(story).then(
    payload => dispatch(receiveStory(payload))
  );
};

export const destroyStory = id => dispatch => {
  return APIUtil.destroyStory(id).then(
    payload => dispatch(receiveStory(payload))
  );
};
