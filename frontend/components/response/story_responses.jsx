import React from 'react';
import { connect } from 'react-redux';

import { responsesForStory } from '../../reducers/selectors';

import ResponseFormContainer from './response_form';
import ResponseIndex from './response_index';

const StoryResponses = ({ responses, story }) => {
  return (
    <div className="story-responses-container">
      <ResponseFormContainer
        storyId = {story.id}></ResponseFormContainer>

      <ResponseIndex
        responses={responses}></ResponseIndex>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  let responses = [];
  const story = ownProps.story;
  const responseArr = story.responses_array
  if (responseArr) {
    responses = responsesForStory(state, responseArr)
  }

  return {
    responses: responses
  }
}

export default connect(
  mapStateToProps
)(StoryResponses)
