import React from 'react';
import { connect } from 'react-redux';

import { responder } from '../../reducers/selectors';
import ClapButton from '../clap/clap_button';

// Should I include a clap or a story?
const ResponseIndexItem = ({ response, responder}) => {
  return (
    <div className="response-index-item">
      <div className="response-form-author-index">
        <img className="response-responder-image" src={responder.image_url} alt="responderAvatar"></img>
        <div className="story-form-author-info">
          <p className="story-form-author-username">{responder.username}</p>
          <p className="story-form-author-date">{response.date}</p>
        </div>
      </div>

      <p className="response-index-item-body">{response.body}</p>

      <div className="response-index-clap-container">
        <ClapButton content={response} type="Response"></ClapButton>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    responder: responder(state, ownProps.response)
  };
};

export default connect(
  mapStateToProps, null
)(ResponseIndexItem);
