import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { responder } from '../../reducers/selectors';
import ClapButton from '../clap/clap_button';

// Should I include a clap or a story?
const ResponseIndexItem = ({ response, responder}) => {
  return (
    <div className="response-index-item">
      <div className="response-index-author-index">
        <Link to={`/users/${responder.id}`}>
        <img className="response-index-author-image" src={responder.avatar} alt="responderAvatar"></img>
        </Link>
        <div className="story-index-author-info">
          <Link to={`/users/${responder.id}`}>
          <p className="response-index-author-username">{responder.username}</p>
          </Link>
          <p className="response-index-author-date">{response.date}</p>
        </div>
      </div>

      <div className="response-index-body-clap">
        <p className="response-index-item-body">{response.body}</p>

        <div className="response-index-clap-container">
          <ClapButton content={response} type="Response"></ClapButton>
        </div>
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
