import { connect } from 'react-redux';

import { createStory } from '../../actions/story_actions';
import { currentUser } from '../../reducers/selectors';

import StoryForm from './story_form';

const mapStateToProps = state => {
  return {
    type: 'Create',
    currentUser: currentUser(state),
    story: {
      title: '',
      header: '',
      body: '',
      photo: null,
      photoUrl: null
    },
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAction: story => dispatch(createStory(story))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(StoryForm);
