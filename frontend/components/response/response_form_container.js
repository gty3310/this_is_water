import { connect } from 'react-redux';

import { createResponse } from '../../actions/response_actions';
import { currentUser } from '../../reducers/selectors';
import { fetchStory } from '../../actions/story_actions';

import ResponseForm from './response_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: currentUser(state),
    story: ownProps.story || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createResponse: response => dispatch(createResponse(response)),
    fetchStory: id => dispatch(fetchStory(id))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ResponseForm);
