import { connect } from 'react-redux';

import { createResponse } from '../../actions/response_actions';
import { currentUser } from '../../reducers/selectors';

import ResponseForm from './response_form';

const mapStateToProps = state => {
  return {
    currentUser: currentUser(state),
    story: state.entities.stories[id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createResponse: response => dispatch(createResponse(response))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ResponseForm);
