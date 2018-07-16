import { connect } from 'react-redux';

import { updateStory, fetchStory } from '../../actions/story_actions';
import { currentUser } from '../../reducers/selectors';

import EditStoryForm from './edit_story_form';

const mapStateToProps = (state, ownProps) => {
  return {
    type: 'Edit',
    currentUser: currentUser(state),
    // This might not be right.  
    story: state.entities.stories[id] || {title: '', header: '', body: ''},
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAction: story => dispatch(updateStory(story)),
    fetchStory: id => dispatch(fetchStory(id))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(EditStoryForm);
