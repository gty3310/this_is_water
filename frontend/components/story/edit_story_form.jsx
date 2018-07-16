import React from 'react';
import { withRouter } from 'react-router-dom';

import StoryForm from './story_form';

class EditStoryForm extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.story.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.story.id !== this.props.story.id) {
      this.props.fetchStory(newProps.story.id);
    }
  }

  render() {
    return (
      <StoryForm
        story={this.props.story}
        type={this.props.type}
        currentUser={this.props.currentUser}
        submitAction={this.props.submitAction}></StoryForm>
    );
  }
}

export default withRouter(EditStoryForm);
