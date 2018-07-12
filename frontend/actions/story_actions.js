import * as APIUtil from '../util/story_api_util';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveStories = stories => {
  return {
    type: RECEIVE_STORIES,
    stories
  };
};

export const receiveStory = story => {
  return {
    type: RECEIVE_STORY,
    story
  };
};

export const removeStory = id => {
  return {
    type: REMOVE_STORY,
    id
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const fetchStories = () => dispatch => {
  return APIUtil.fetchStories.then(
    stories => dispatch(receiveStories(stories))
  );
};

export const fetchStory = id => dispatch => {
  return APIUtil.fetchStory(id).then(
    story => dispatch(receiveStory(story))
  );
};

export const createStory = formData => dispatch => {
  return APIUtil.createStory(formData).then(
    story => dispatch(receiveStory(story)),
    err => dispatch(receiveErrors(err))
  );
};

export const updateStory = (formData, id) => dispatch => {
  return APIUtil.updateStory(formData, id).then(
    story => dispatch(receiveStory(story)),
    err => dispatch(receiveErrors(err))
  );
};

export const deleteStory = id => dispatch => {
  return APIUtil.deleteStory(id).then(
    story => dispatch(removeStory(id)),
    err => dispatch(receiveErrors(err))
  );
};
