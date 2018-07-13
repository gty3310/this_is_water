import { combineReducers } from 'redux';

import session_errors from './session_errors_reducer';
import story_errors from './story_errors_reducer';

export default combineReducers({
  session_errors,
  story_errors
});
